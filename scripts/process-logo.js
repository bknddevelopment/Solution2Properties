const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  const inputPath = path.join(__dirname, '../Solution2properties.jpg');
  const outputDir = path.join(__dirname, '../solution2properties/public');
  
  try {
    // Create optimized JPG version
    await sharp(inputPath)
      .resize(400, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(path.join(outputDir, 'logo-optimized.jpg'));
    
    console.log('✓ Created optimized JPG (logo-optimized.jpg)');
    
    // Create PNG version with transparent background
    // Note: This will only work well if the logo has a solid background
    await sharp(inputPath)
      .resize(400, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png()
      .toFile(path.join(outputDir, 'logo.png'));
    
    console.log('✓ Created PNG version (logo.png)');
    
    // Create white version for dark backgrounds
    await sharp(inputPath)
      .resize(400, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .negate({ alpha: false })
      .png()
      .toFile(path.join(outputDir, 'logo-white.png'));
    
    console.log('✓ Created white version (logo-white.png)');
    
    // Create small icon version (for favicon base)
    await sharp(inputPath)
      .resize(256, 256, { 
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(outputDir, 'logo-icon.png'));
    
    console.log('✓ Created icon version (logo-icon.png)');
    
    // Create favicon sizes
    const faviconSizes = [16, 32, 48, 64, 128, 192, 512];
    
    for (const size of faviconSizes) {
      await sharp(inputPath)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .png()
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
    }
    
    console.log('✓ Created favicon sizes');
    
    // Create apple-touch-icon
    await sharp(inputPath)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    
    console.log('✓ Created apple-touch-icon.png');
    
    // Get file sizes
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(path.join(outputDir, 'logo-optimized.jpg')).size;
    
    console.log(`\n📊 File size reduction: ${Math.round((1 - optimizedSize/originalSize) * 100)}%`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
    
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

processLogo();