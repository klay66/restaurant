import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/assets';
const outputDir = 'src/assets/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Images to optimize
const images = [
    'hero.png',
    'food.png',
    'chef .png',
    'food1.png',
    'food2.png'
];

async function optimizeImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
        console.log(`✅ Optimized: ${outputPath}`);
    } catch (error) {
        console.error(`❌ Error optimizing ${inputPath}:`, error);
    }
}

async function optimizeAllImages() {
    for (const image of images) {
        const inputPath = path.join(inputDir, image);
        const outputPath = path.join(outputDir, image.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

        if (fs.existsSync(inputPath)) {
            await optimizeImage(inputPath, outputPath);
        } else {
            console.log(`⚠️  File not found: ${inputPath}`);
        }
    }
}

optimizeAllImages();