require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const svgDir = path.join(__dirname, '../public/svg');

async function uploadSvgs() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error('Cloudinary credentials missing in .env');
    process.exit(1);
  }

  if (!fs.existsSync(svgDir)) {
    console.error('public/svg directory not found');
    process.exit(1);
  }

  const files = fs.readdirSync(svgDir).filter(f => f.toLowerCase().endsWith('.svg'));
  if (files.length === 0) {
    console.log('No SVG files found.');
    return;
  }

  console.log(`Uploading ${files.length} SVG(s) to portfolio/svg/ ...`);
  const out = {};

  for (const file of files) {
    const filePath = path.join(svgDir, file);
    const publicId = path.parse(file).name.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'portfolio/svg',
        public_id: publicId,
        resource_type: 'image',
        overwrite: true,
      });
      console.log(`OK  ${file} -> ${result.secure_url}`);
      out[file] = result.secure_url;
    } catch (err) {
      console.error(`FAIL ${file}: ${err.message}`);
    }
  }

  const outPath = path.join(__dirname, '../cloudinary_svg_links.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`\nDone. Links saved to ${outPath}`);
}

uploadSvgs();
