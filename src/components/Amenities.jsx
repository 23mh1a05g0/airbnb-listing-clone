import LISTING from "../data/listingData";

export default function Amenities() {
  return (
    <section className="section" id="amenities">
      <h2>What this place offers</h2>
      <div className="amenities">
        {LISTING.amenities.map((a, i) => (
          <div className={`amenity ${a[2] ? "unavailable" : ""}`} key={i}>
            <span className="amenity-icon">{a[0]}</span>
            <span>{a[1]}</span>
          </div>
        ))}
      </div>
      <button className="pill">Show all 50 amenities</button>
    </section>
  );
}
