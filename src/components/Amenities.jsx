import LISTING from "../data/listingData";
import { AmenityIcon } from "./Icons";

export default function Amenities() {
  return (
    <section className="section" id="amenities">
      <h2>What this place offers</h2>
      <div className="amenities">
        {LISTING.amenities.map((a, i) => (
          <div className={`amenity ${a.unavailable ? "unavailable" : ""}`} key={i}>
            <span className="amenity-icon">
              <AmenityIcon name={a.key} size={24} />
            </span>
            <span>{a.label}</span>
          </div>
        ))}
      </div>
      <button className="pill">Show all 50 amenities</button>
    </section>
  );
}
