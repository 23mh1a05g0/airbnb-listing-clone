import LISTING, { getOptimizedImageUrl } from "../data/listingData";

export default function ListingOverview() {
  return (
    <>
      <section className="section" id="photos">
        <h2>
          Entire serviced apartment in {LISTING.city}, {LISTING.country}
        </h2>
        <p className="sub">
          {LISTING.guests} guests · {LISTING.bedrooms} bedrooms · {LISTING.beds}{" "}
          beds · {LISTING.bathrooms} bathrooms
        </p>
      </section>

      <section className="section favourite-section">
        <div className="favourite">
          <div>
            <h3>
              <span className="laurel">❧</span> Guest favourite{" "}
              <span className="laurel">❧</span>
            </h3>
            <p className="sub">
              One of the most loved homes on Airbnb, based on ratings, reviews,
              and reliability.
            </p>
          </div>
          <div className="fav-score">
            <strong>{LISTING.rating}</strong>
            <div>★★★★★</div>
            <small>{LISTING.reviews} Reviews</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="host">
          <img
            className="avatar"
            src={getOptimizedImageUrl(LISTING.hostAvatar, 96, 75)}
            alt="Host"
            loading="lazy"
            decoding="async"
          />
          <div>
            <b>Hosted by {LISTING.host}</b>
            <div className="sub">{LISTING.yearsHosting} years hosting</div>
          </div>
        </div>
      </section>

      <section className="section highlights-section">
        {LISTING.highlights.map((h, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-icon">{h.icon}</div>
            <div>
              <b>{h.title}</b>
              <div className="sub">{h.desc}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="translation">
          Some info has been automatically translated. <u>Show original</u>
        </div>
        <p className="description">{LISTING.description}</p>
        <button className="show-more">Show more →</button>
      </section>
    </>
  );
}
