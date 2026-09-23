import { memo } from "react";
import LISTING, { getOptimizedImageUrl } from "../data/listingData";

function PhotoGrid({ onOpenTour }) {
  return (
    <div className="photo-grid" aria-label="Listing photos">
      {LISTING.photos.slice(0, 5).map((p, n) => {
        const isPrimary = n === 0;
        const defaultWidth = isPrimary ? 960 : 560;
        const src = getOptimizedImageUrl(p.url, defaultWidth, 75, "webp");
        const srcSet = isPrimary
          ? `${getOptimizedImageUrl(p.url, 560, 75, "webp")} 560w, ${getOptimizedImageUrl(p.url, 960, 75, "webp")} 960w, ${getOptimizedImageUrl(p.url, 1200, 75, "webp")} 1200w`
          : `${getOptimizedImageUrl(p.url, 300, 75, "webp")} 300w, ${getOptimizedImageUrl(p.url, 560, 75, "webp")} 560w`;
        const sizes = isPrimary
          ? "(max-width: 800px) 100vw, 590px"
          : "(max-width: 800px) 50vw, 290px";

        return (
          <button
            className="tile"
            key={n}
            onClick={() => onOpenTour(n)}
            aria-label={`Open photo ${n + 1}`}
          >
            <img
              src={src}
              srcSet={srcSet}
              sizes={sizes}
              alt={p.caption}
              loading="eager"
              fetchPriority={isPrimary ? "high" : "low"}
              decoding="async"
              width={isPrimary ? 590 : 290}
              height={isPrimary ? 500 : 245}
            />
            {n === 4 && <span className="show-all">⊞ Show all photos</span>}
          </button>
        );
      })}
    </div>
  );
}

export default memo(PhotoGrid);
