import { rm } from 'fs/promises';
import { join } from 'path';

async function clearNextFolder() {
  const nextFolderPath = join(process.cwd(), '.next');
  
  try {
    await rm(nextFolderPath, { recursive: true, force: true });
    console.log('.next folder has been cleared successfully.');
  } catch (error) {
    console.error('Error clearing .next folder:', error);
  }
}

clearNextFolder();