const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets');
const outputDir = path.join(__dirname, 'src/assets/responsive');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Tamaños para srcset (porcentajes del original)
const sizes = [50, 75, 100];

const inputDirs = [
  path.join(__dirname, 'src/assets'),
  path.join(__dirname, 'src/assets/gallery_img')
];

// Procesar todas las imágenes WebP y PNG
inputDirs.forEach(inputDir => {
  if (fs.existsSync(inputDir)) {
    fs.readdirSync(inputDir).forEach(file => {
      if (/\.(webp|png|jpg|jpeg)$/i.test(file)) {
        const inputPath = path.join(inputDir, file);
        const baseName = path.parse(file).name;

        sharp(inputPath)
          .metadata()
          .then(metadata => {
            const { width, height } = metadata;

            sizes.forEach(size => {
              const newWidth = Math.round(width * size / 100);
              const newHeight = Math.round(height * size / 100);
              const outputFile = `${baseName}-${size}w.webp`;
              const outputPath = path.join(outputDir, outputFile);

              sharp(inputPath)
                .resize(newWidth, newHeight)
                .webp({ quality: 85 })
                .toFile(outputPath)
                .then(() => console.log(`Generado: ${outputFile}`))
                .catch(err => console.error(`Error generando ${outputFile}:`, err));
            });
          })
          .catch(err => console.error(`Error leyendo metadata de ${file}:`, err));
      }
    });
  }
});

console.log('Generación de imágenes responsivas completada.');