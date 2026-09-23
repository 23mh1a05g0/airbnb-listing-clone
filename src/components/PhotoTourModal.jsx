import { useEffect, useCallback } from "react";
import LISTING, { getOptimizedImageUrl } from "../data/listingData";
import { ChevronLeftIcon, ShareIcon, HeartIcon } from "./Icons";

export default function PhotoTourModal({
  initialIndex = 0,
  onClose,
  onOpenLightbox,
}) {
  useEffect(() => {
    if (initialIndex >= 0) {
      const target = document.getElementById(`tour-photo-${initialIndex}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [initialIndex]);

  const scrollToPhoto = useCallback((index) => {
    const target = document.getElementById(`tour-photo-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="overlay-top">
        <button className="pill back-pill-btn" id="back" onClick={onClose}>
          <ChevronLeftIcon size={16} />
          <span>Back</span>
        </button>
        <strong>Photo tour</strong>
        <div className="modal-actions">
          <button className="link-btn" aria-label="Share">
            <ShareIcon size={16} />
            <span>Share</span>
          </button>
          <button className="link-btn" aria-label="Save">
            <HeartIcon size={16} />
            <span>Save</span>
          </button>
        </div>
      </div>
      <div className="tour-inner">
        {/* Thumbnail strip — small images, all lazy */}
        <div className="thumb-grid">
          {LISTING.photos.map((p, n) => (
            <button
              className="thumb"
              key={n}
              onClick={() => scrollToPhoto(n)}
            >
              <img
                src={getOptimizedImageUrl(p.url, 200, 65, "webp")}
                alt={p.caption}
                loading="lazy"
                decoding="async"
                width={200}
                height={135}
              />
              <figcaption>{p.caption}</figcaption>
            </button>
          ))}
        </div>

        {/* Full-size room photos — lazy-loaded individually as user scrolls */}
        {LISTING.photos.map((p, n) => {
          // First visible photo loads eagerly (user scrolled here from hero);
          // remaining load lazily as user scrolls down the tour.
          const isFirst = n === initialIndex;
          return (
            <section className="room-block" id={`tour-photo-${n}`} key={n}>
              <div>
                <h2>{p.room}</h2>
                <p className="sub">{p.amenities}</p>
              </div>
              <button
                className="photo-large-button"
                onClick={() => onOpenLightbox(n)}
                aria-label={`View photo ${n + 1}: ${p.caption}`}
              >
                <img
                  src={getOptimizedImageUrl(p.url, 900, 78, "webp")}
                  srcSet={`${getOptimizedImageUrl(p.url, 640, 75, "webp")} 640w, ${getOptimizedImageUrl(p.url, 900, 78, "webp")} 900w, ${getOptimizedImageUrl(p.url, 1200, 80, "webp")} 1200w`}
                  sizes="(max-width: 900px) 100vw, 800px"
                  alt={p.caption}
                  loading={isFirst ? "eager" : "lazy"}
                  decoding="async"
                  width={900}
                  height={600}
                />
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
}
