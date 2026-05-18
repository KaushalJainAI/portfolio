require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Uploads a single document (PDF) to Cloudinary as a raw asset.
// Usage: node scripts/uploadResume.cjs "<absolute path to pdf>"
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const sourcePath = process.argv[2];
const PUBLIC_ID = 'portfolio/Kaushal_Jain_Resume.pdf';

async function main() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Cloudinary credentials missing in .env');
    process.exit(1);
  }
  if (!sourcePath || !fs.existsSync(sourcePath)) {
    console.error(`Source file not found: ${sourcePath}`);
    process.exit(1);
  }

  try {
    const result = await cloudinary.uploader.upload(sourcePath, {
      resource_type: 'raw',
      public_id: PUBLIC_ID,
      overwrite: true,
      invalidate: true,
    });
    console.log(result.secure_url);
  } catch (error) {
    console.error('Upload failed:', error.message);
    process.exit(1);
  }
}

main();
