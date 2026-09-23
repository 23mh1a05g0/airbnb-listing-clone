import LISTING from "../data/listingData";

export default function LocationSection() {
  return (
    <section className="section" id="location">
      <h2>Where you’ll be</h2>
      <p className="location-name">
        {LISTING.city}, {LISTING.country}
      </p>
      <div
        className="location-map"
        role="img"
        aria-label="Static map placeholder showing the listing location"
      >
        <span className="map-search">⌕</span>
        <span className="map-zoom">
          ＋<br />
          <hr />−
        </span>
        <span className="map-pin">⌂</span>
      </div>
      <p className="map-note">Exact location will be provided after booking.</p>
      <div className="neighbourhood">
        <h3>Neighbourhood highlights</h3>
        <p>
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay
          with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="show-more">Show more ›</button>
      </div>
    </section>
  );
}
