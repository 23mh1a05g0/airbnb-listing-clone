import LISTING, { getOptimizedImageUrl } from "../data/listingData";

export default function SleepingArrangements() {
  return (
    <section className="section">
      <h2>Where you'll sleep</h2>
      <div className="sleep-grid">
        {LISTING.sleeps.map((s, i) => (
          <div className="sleep-card" key={i}>
            <img
              src={getOptimizedImageUrl(s.img, 500, 75)}
              alt={s.name}
              loading="lazy"
              decoding="async"
            />
            <b>{s.name}</b>
            <div className="sub">{s.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
