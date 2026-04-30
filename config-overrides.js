const path = require('path');

module.exports = function override(config, env) {
  // Agregar image-webpack-loader para optimizar imágenes
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|webp|svg)$/i,
    use: [
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 85, // Ajusta calidad para lossless
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.85, 0.9],
            speed: 4,
          },
          webp: {
            quality: 85,
          },
        },
      },
    ],
  });

  return config;
};