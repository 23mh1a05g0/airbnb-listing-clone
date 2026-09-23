import { useEffect, useRef } from "react";
import LISTING, { getOptimizedImageUrl } from "../data/listingData";
import {
  GridIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "./Icons";

// Preload an image by URL (fire-and-forget)
function preloadImage(url) {
  if (!url) return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = url;
  document.head.appendChild(link);
}

export default function LightboxModal({
  photoIndex,
  onClose,
  onOpenTour,
  onPrev,
  onNext,
}) {
  const containerRef = useRef(null);
  const p = LISTING.photos[photoIndex];
  const total = LISTING.photos.length;

  // Focus the container for keyboard nav
  useEffect(() => {
    containerRef.current?.focus();
  }, [photoIndex]);

  // Eagerly preload the next and previous images for instant navigation
  useEffect(() => {
    const prevIdx = (photoIndex + total - 1) % total;
    const nextIdx = (photoIndex + 1) % total;
    preloadImage(getOptimizedImageUrl(LISTING.photos[prevIdx].url, 1200, 80, "webp"));
    preloadImage(getOptimizedImageUrl(LISTING.photos[nextIdx].url, 1200, 80, "webp"));
  }, [photoIndex, total]);

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
          className="pill icon-pill-btn"
          id="tour"
          onClick={onOpenTour}
          aria-label="Back to photo tour"
        >
          <GridIcon size={18} />
        </button>
        <strong>{p.caption}</strong>
        <div className="counter">
          {photoIndex + 1} of {total}{" "}
          <button
            className="pill icon-pill-btn"
            id="close"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <CloseIcon size={16} />
          </button>
        </div>
      </div>
      <button
        className="nav-arrow prev"
        id="prev"
        aria-label="Previous photo"
        onClick={onPrev}
      >
        <ChevronLeftIcon size={20} />
      </button>
      <div className="lightbox-center">
        <img
          className="lightbox-img"
          src={getOptimizedImageUrl(p.url, 1200, 80, "webp")}
          srcSet={`${getOptimizedImageUrl(p.url, 800, 78, "webp")} 800w, ${getOptimizedImageUrl(p.url, 1200, 80, "webp")} 1200w`}
          sizes="(max-width: 900px) 100vw, 1200px"
          alt={p.caption}
          decoding="async"
          width={1200}
          height={800}
          fetchPriority="high"
        />
      </div>
      <button
        className="nav-arrow next"
        id="next"
        aria-label="Next photo"
        onClick={onNext}
      >
        <ChevronRightIcon size={20} />
      </button>
    </div>
  );
}
