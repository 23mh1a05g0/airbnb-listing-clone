import { memo } from "react";
import LISTING, { getOptimizedImageUrl } from "../data/listingData";

function SleepingArrangements() {
  return (
    <section className="section">
      <h2>Where you'll sleep</h2>
      <div className="sleep-grid">
        {LISTING.sleeps.map((s, i) => {
          const src = getOptimizedImageUrl(s.img, 500, 75, "webp");
          const srcSet = `${getOptimizedImageUrl(s.img, 320, 75, "webp")} 320w, ${getOptimizedImageUrl(s.img, 500, 75, "webp")} 500w, ${getOptimizedImageUrl(s.img, 700, 75, "webp")} 700w`;

          return (
            <div className="sleep-card" key={i}>
              <img
                src={src}
                srcSet={srcSet}
                sizes="(max-width: 800px) 100vw, 320px"
                alt={s.name}
                loading="lazy"
                decoding="async"
                width={320}
                height={220}
              />
              <b>{s.name}</b>
              <div className="sub">{s.detail}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(SleepingArrangements);
