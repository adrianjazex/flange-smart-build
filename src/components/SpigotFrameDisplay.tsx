import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SpigotFrameDisplayProps {
  frames: string[];
  autoPlay?: boolean;
  interval?: number;
}

export const SpigotFrameDisplay: React.FC<SpigotFrameDisplayProps> = ({ 
  frames, 
  autoPlay = true, 
  interval = 1000 
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (!autoPlay || frames.length === 0) return;

    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, frames.length, interval]);

  if (frames.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-foreground">Spigot Adjustment Demo:</h4>
      
      {/* Main display */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative bg-muted">
            <img 
              src={frames[currentFrame]} 
              alt={`Spigot adjustment angle ${currentFrame + 1}`}
              className="w-full h-48 object-contain"
            />
            <div className="absolute bottom-2 right-2 bg-background/80 text-xs px-2 py-1 rounded">
              {currentFrame + 1} / {frames.length}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thumbnail navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {frames.map((frame, index) => (
          <button
            key={index}
            onClick={() => setCurrentFrame(index)}
            className={`flex-shrink-0 border-2 rounded transition-all ${
              currentFrame === index 
                ? 'border-primary shadow-md' 
                : 'border-muted hover:border-muted-foreground'
            }`}
          >
            <img 
              src={frame} 
              alt={`Angle ${index + 1}`}
              className="w-16 h-12 object-contain bg-muted rounded-sm"
            />
          </button>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Demonstration of different spigot adjustment angles - background and hands removed
      </p>
    </div>
  );
};