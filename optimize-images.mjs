import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
  'Huawei_IdeaHub_classroom.png',
  'Huawei_IdeaHub_small_room.jpg',
  'huawei-ideahub-1-e1612982413831-780x405.jpg',
  'huawei-ideahub-s2-65.jpg',
  'HW_POS_RBG_Vertical-300ppi.png',
  'idea share.jpg',
  'hybrid.jpg',
  'idea-hub.jpg',
  'IdeaHub_-min.png',
  'ideahub-1.jpg',
  'ideahub1 .png',
  'fondo1 .png'
];

const sourceDir = 'c:\\Users\\Cristian\\Obsidian\\Cristian\\CDU\\PROYECTOS\\AISTANA';
const destDir = 'c:\\Users\\Cristian\\Obsidian\\Cristian\\CDU\\PROYECTOS\\AISTANA\\aistana-huawei-displays\\public\\bg_images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function processImages() {
  for (const img of images) {
    const srcPath = path.join(sourceDir, img);
    if (!fs.existsSync(srcPath)) {
      console.log(`Not found: ${srcPath}`);
      continue;
    }
    
    const parsed = path.parse(img);
    const name = parsed.name.replace(/\s+/g, '_');
    
    try {
      // Generate WebP
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(path.join(destDir, `${name}.webp`));
        
      // Generate optimized JPEG/PNG
      if (parsed.ext.toLowerCase() === '.png') {
          await sharp(srcPath).png({ quality: 85 }).toFile(path.join(destDir, `${name}.png`));
      } else {
          await sharp(srcPath).jpeg({ quality: 85 }).toFile(path.join(destDir, `${name}.jpg`));
      }
      console.log(`Processed: ${name}`);
    } catch (e) {
      console.error(`Error processing ${img}:`, e);
    }
  }
}

processImages().then(() => console.log('Images optimized')).catch(console.error);