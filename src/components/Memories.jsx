import React, { useState } from "react";

const imageModules = import.meta.glob(
  "/src/assets/pictures/photos/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}",
  {
    eager: true,
    import: "default",
  },
);

const allImages = Object.entries(imageModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([, src]) => src);
const Memories = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = showAll ? allImages : allImages.slice(0, 8);

  return (
    <section className="section">
      <h2>📸 This is where it all began</h2>

      <div className="gallery">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            className="image-card"
            onClick={() => setSelectedImage(src)}
            aria-label={`View memory ${index + 1}`}
          >
            <img src={src} alt={`Memory ${index + 1}`} />
          </button>
        ))}
      </div>

      {allImages.length > 8 && (
        <div className="see-all-container">
          <button
            type="button"
            className="see-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={selectedImage} alt="Full size memory" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Memories;
