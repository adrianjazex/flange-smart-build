import { removeBackground, loadImage } from '@/lib/backgroundRemoval';

export const processLogoImage = async (logoPath: string): Promise<string> => {
  try {
    // Fetch the logo image
    const response = await fetch(logoPath);
    if (!response.ok) {
      throw new Error('Failed to fetch logo image');
    }
    
    const blob = await response.blob();
    
    // Load image element
    const imageElement = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(imageElement);
    
    // Create a data URL from the processed blob
    return URL.createObjectURL(processedBlob);
  } catch (error) {
    console.error('Error processing logo:', error);
    throw error;
  }
};