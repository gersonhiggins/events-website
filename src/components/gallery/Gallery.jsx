import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";
import gallery_img from "../../constants/galleryimages";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [LightboxComponent, setLightboxComponent] = useState(null);
  const [lightboxLoading, setLightboxLoading] = useState(false);

  const openLightbox = async (index) => {
    setPhotoIndex(index);
    setIsOpen(true);

    if (!LightboxComponent) {
      setLightboxLoading(true);
      const module = await import("yet-another-react-lightbox");
      setLightboxComponent(() => module.default);
      setLightboxLoading(false);
    }
  };

  return (
    <div>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {gallery_img.map((img, i) => (
          <img
            key={i}
            src={img.src}
            srcSet={img.srcset}
            sizes={img.sizes}
            alt={`Gallery ${i}`}
            className="gallery-img"
            loading="lazy"
            onClick={() => openLightbox(i)}
          />
        ))}
      </Masonry>

      {lightboxLoading && <div className="gallery-lightbox-loading">Cargando galería...</div>}
      {isOpen && LightboxComponent && (
        <LightboxComponent
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={gallery_img.map((img) => ({ src: img.src }))}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
    </div>
  );
}
