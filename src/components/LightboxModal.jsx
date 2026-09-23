import { useEffect, useRef } from "react";
import LISTING, { getOptimizedImageUrl } from "../data/listingData";

export default function LightboxModal({
  photoIndex,
  onClose,
  onOpenTour,
  onPrev,
  onNext,
}) {
  const containerRef = useRef(null);
  const p = LISTING.photos[photoIndex];

  useEffect(() => {
    containerRef.current?.focus();
  }, [photoIndex]);

  return (
    <div
      className="overlay lightbox"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={containerRef}
    >
      <div className="overlay-top">
        <button
          className="pill"
          id="tour"
          onClick={onOpenTour}
          aria-label="Back to photo tour"
        >
          ▦
        </button>
        <strong>{p.caption}</strong>
        <div className="counter">
          {photoIndex + 1} of {LISTING.photos.length}{" "}
          <button
            className="pill"
            id="close"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            ×
          </button>
        </div>
      </div>
      <button
        className="nav-arrow prev"
        id="prev"
        aria-label="Previous photo"
        onClick={onPrev}
      >
        ‹
      </button>
      <div className="lightbox-center">
        <img
          className="lightbox-img"
          src={getOptimizedImageUrl(p.url, 1200, 80)}
          alt={p.caption}
          decoding="async"
        />
      </div>
      <button
        className="nav-arrow next"
        id="next"
        aria-label="Next photo"
        onClick={onNext}
      >
        ›
      </button>
    </div>
  );
}
