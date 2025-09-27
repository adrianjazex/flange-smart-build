import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { removeBackground, loadImage } from '@/lib/backgroundRemoval';
import { toast } from 'sonner';

interface VideoFrameProcessorProps {
  videoSrc: string;
  onFramesProcessed: (frames: string[]) => void;
}

export const VideoFrameProcessor: React.FC<VideoFrameProcessorProps> = ({ 
  videoSrc, 
  onFramesProcessed 
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedFrames, setProcessedFrames] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const extractAndProcessFrames = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsProcessing(true);
    toast.info('Extracting and processing video frames... First run may take up to a minute to download the AI model.');

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error('Could not get canvas context');

      // Wait for video to load metadata
      await new Promise((resolve) => {
        if (video.readyState >= 1) resolve(null);
        else video.addEventListener('loadedmetadata', () => resolve(null));
      });

      // Ensure silent operations for programmatic seeking
      video.muted = true;
      video.pause();

      const duration = video.duration;
      const frameCount = 6; // Extract 6 key frames
      const frames: string[] = [];

      // Set canvas size to video dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Robust seek helper with timeout fallback
      const seekTo = (targetTime: number, timeout = 5000) =>
        new Promise<void>((resolve) => {
          let settled = false;
          const onSeeked = () => {
            if (settled) return; settled = true; cleanup(); resolve();
          };
          const onError = () => {
            if (settled) return; settled = true; cleanup(); resolve();
          };
          const cleanup = () => {
            video.removeEventListener('seeked', onSeeked);
            video.removeEventListener('error', onError);
          };
          // Clamp target time to valid range
          const clamped = Math.max(0, Math.min(targetTime, Math.max(0, (video.duration || 0) - 0.05)));
          video.addEventListener('seeked', onSeeked, { once: true });
          video.addEventListener('error', onError, { once: true });
          const timer = setTimeout(() => {
            if (settled) return; settled = true; cleanup(); resolve();
          }, timeout);
          // Clear timer in onSeeked/onError via settled flag
          video.currentTime = clamped;
        });

      for (let i = 0; i < frameCount; i++) {
        const time = (duration / (frameCount - 1)) * i;
        
        // Seek to specific time using robust helper
        await seekTo(time);

        // Draw frame to canvas
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert to blob and process with background removal
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
          }, 'image/jpeg', 0.9);
        });

        // Load as image and remove background
        const imageElement = await loadImage(blob);
        const processedBlob = await removeBackground(imageElement);
        
        // Convert processed blob to data URL
        const dataUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(processedBlob);
        });

        frames.push(dataUrl);
        toast.info(`Processed frame ${i + 1} of ${frameCount}`);
      }

      setProcessedFrames(frames);
      onFramesProcessed(frames);
      toast.success('Video frames processed successfully!');
      
    } catch (error) {
      console.error('Error processing video frames:', error);
      toast.error('Failed to process video frames');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <video 
        ref={videoRef}
        src={videoSrc}
        style={{ display: 'none' }}
        preload="metadata"
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      <div className="flex items-center gap-4">
        <Button 
          onClick={extractAndProcessFrames}
          disabled={isProcessing}
          variant="outline"
          size="sm"
        >
          {isProcessing ? 'Processing...' : 'Extract & Clean Frames'}
        </Button>
        
        {processedFrames.length > 0 && (
          <span className="text-sm text-muted-foreground">
            {processedFrames.length} frames processed
          </span>
        )}
      </div>

      {processedFrames.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <h4 className="font-semibold text-foreground mb-3">
              Processed Spigot Adjustment Frames:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {processedFrames.map((frame, index) => (
                <div key={index} className="relative">
                  <img 
                    src={frame} 
                    alt={`Spigot adjustment angle ${index + 1}`}
                    className="w-full h-24 object-contain bg-muted rounded border"
                  />
                  <span className="absolute bottom-1 left-1 bg-background/80 text-xs px-1 rounded">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};