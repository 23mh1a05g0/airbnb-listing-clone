import LISTING, { getOptimizedImageUrl } from "../data/listingData";

export default function PhotoGrid({ onOpenTour }) {
  return (
    <div className="photo-grid" aria-label="Listing photos">
      {LISTING.photos.slice(0, 5).map((p, n) => (
        <button
          className="tile"
          key={n}
          onClick={() => onOpenTour(n)}
          aria-label={`Open photo ${n + 1}`}
        >
          <img
            src={getOptimizedImageUrl(p.url, n === 0 ? 960 : 560, 75)}
            alt={p.caption}
            loading="eager"
            fetchPriority={n === 0 ? "high" : "auto"}
            decoding="async"
          />
          {n === 4 && <span className="show-all">⊞ Show all photos</span>}
        </button>
      ))}
    </div>
  );
}
