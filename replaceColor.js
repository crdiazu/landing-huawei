import fs from 'fs';
import path from 'path';

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir);

files.forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/#E60012/g, '#4A7C59');
    fs.writeFileSync(filePath, content);
  }
});
console.log('Replaced #E60012 with #4A7C59 in all pages.');
