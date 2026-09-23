import LISTING, { getOptimizedImageUrl } from "../data/listingData";

const NEARBY_STAYS = [
  {
    title: "Beautiful Studio with a view to die for",
    price: 23600,
    rating: 4.91,
  },
  {
    title: "NAQAB - 1bhk with private pool",
    price: 42218,
    rating: 4.95,
  },
  {
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: 44506,
    rating: 4.94,
  },
  {
    title: "The Tropical Studio | 5 mins to Beach",
    price: 22824,
    rating: 4.96,
  },
  {
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: 39942,
    rating: 4.95,
  },
];

export default function NearbyStays() {
  return (
    <section className="section nearby">
      <div className="nearby-head">
        <h2>More stays nearby</h2>
        <span>1 / 2　◯ ❯</span>
      </div>
      <div className="nearby-grid">
        {LISTING.photos.slice(0, 5).map((p, n) => (
          <article key={n}>
            <img
              src={getOptimizedImageUrl(p.url, 480, 75)}
              alt={NEARBY_STAYS[n].title}
              loading="lazy"
              decoding="async"
            />
            <b>{NEARBY_STAYS[n].title}</b>
            <div>
              ₹{NEARBY_STAYS[n].price.toLocaleString()}　★{" "}
              {NEARBY_STAYS[n].rating}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
