import LISTING, { getOptimizedImageUrl } from "../data/listingData";
import {
  LaurelBranchLeft,
  LaurelBranchRight,
  StarIcon,
  SparkleIcon,
  WifiIcon,
  LocationPinIcon,
} from "./Icons";

function HighlightIcon({ iconKey }) {
  switch (iconKey) {
    case "service":
      return <SparkleIcon size={24} />;
    case "wifi":
      return <WifiIcon size={24} />;
    case "location":
      return <LocationPinIcon size={24} />;
    default:
      return <SparkleIcon size={24} />;
  }
}

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
          <div className="fav-title-group">
            <h3>
              <LaurelBranchLeft size={28} className="laurel-branch" />
              <span>Guest favourite</span>
              <LaurelBranchRight size={28} className="laurel-branch" />
            </h3>
            <p className="sub">
              One of the most loved homes on Airbnb, based on ratings, reviews,
              and reliability.
            </p>
          </div>
          <div className="fav-score">
            <strong>{LISTING.rating}</strong>
            <div className="fav-stars" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={14} filled={true} />
              ))}
            </div>
            <small>{LISTING.reviews} Reviews</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="host">
          <img
            className="avatar"
            src={getOptimizedImageUrl(LISTING.hostAvatar, 96, 75, "webp")}
            alt="Host"
            loading="lazy"
            decoding="async"
            width={48}
            height={48}
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
            <div className="highlight-icon">
              <HighlightIcon iconKey={h.iconKey} />
            </div>
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
