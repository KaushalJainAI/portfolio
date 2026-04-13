require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary with credentials from .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const publicDir = path.join(__dirname, '../public');

// Supported image/video extensions
const supportedExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.mp4', '.mov', '.webm'];

async function uploadAssets() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('❌ Cloudinary credentials are missing. Please add them to your .env file.');
    return;
  }

  console.log('Scanning public directory...');
  const files = fs.readdirSync(publicDir);
  const mediaFiles = files.filter(file => supportedExtensions.includes(path.extname(file).toLowerCase()));

  if (mediaFiles.length === 0) {
    console.log('No media files found in public directory.');
    return;
  }

  console.log(`Found ${mediaFiles.length} files. Starting upload...`);
  
  const uploadedUrls = {};

  for (const file of mediaFiles) {
    const filePath = path.join(publicDir, file);
    const fileExtension = path.extname(file).toLowerCase();
    let fileNameWithoutExt = path.parse(file).name;
    
    // Sanitize the filename to be safe for a URL and Cloudinary public_id (replaces spaces and special chars with underscores)
    const safePublicId = fileNameWithoutExt.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();

    const isVideo = ['.mp4', '.mov', '.webm'].includes(fileExtension);
    
    try {
      console.log(`Uploading ${file}...`);
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'portfolio', 
        resource_type: isVideo ? 'video' : 'image',
        public_id: safePublicId, 
        overwrite: true,
      });

      console.log(`✅ Uploaded: ${result.secure_url}`);
      uploadedUrls[file] = result.secure_url;
    } catch (error) {
      console.error(`❌ Failed to upload ${file}:`, error.message);
    }
  }

  // Write a JSON file with all the new links so you can easily update assetLinks.ts!
  const outputDataPath = path.join(__dirname, '../cloudinary_links.json');
  fs.writeFileSync(outputDataPath, JSON.stringify(uploadedUrls, null, 2));
  
  console.log('\n🎉 All uploads finished!');
  console.log(`Saved all Cloudinary public links to: ${outputDataPath}`);
}

uploadAssets();
