import LISTING, { getOptimizedImageUrl } from "../data/listingData";

const CATEGORIES = [
  "Cleanliness",
  "Accuracy",
  "Check-in",
  "Communication",
  "Location",
  "Value",
];
const SYMBOLS = ["⌁", "✓", "⌕", "▢", "▤", "◇"];
const REVIEW_TAGS = [
  "Comfort 6",
  "Accuracy 5",
  "Hot tub 5",
  "Condition 4",
  "Hospitality 8",
  "Cleanliness 4",
  "Amenities 2",
];

export default function ReviewsSection() {
  return (
    <section className="section" id="reviews">
      <div className="review-top">
        <div className="review-score">
          <span className="laurel">❧</span> 4.95{" "}
          <span className="laurel">❧</span>
        </div>
        <h2>Guest favourite</h2>
        <p className="sub">
          This home is a guest favourite based on ratings, reviews, and
          reliability.
        </p>
        <a className="show-more" href="#reviews">
          How reviews work
        </a>
      </div>

      <div className="review-breakdown">
        <div className="overall-rating">
          <b>Overall rating</b>
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((v, n) => (
              <span key={v}>
                {v}
                <i className={n === 0 ? "filled" : ""} />
              </span>
            ))}
          </div>
        </div>
        {CATEGORIES.map((x, n) => (
          <div className="rating-category" key={x}>
            <b>{x}</b>
            <strong>{n > 3 ? "4.8" : "5.0"}</strong>
            <span className="rating-symbol">{SYMBOLS[n]}</span>
          </div>
        ))}
      </div>

      <div className="review-tags">
        {REVIEW_TAGS.map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>

      <div className="reviews-grid">
        {LISTING.reviewsData.map((x, i) => (
          <article className="review" key={i}>
            <div className="review-head">
              <img
                src={getOptimizedImageUrl(x.avatar, 96, 75)}
                alt={x.name}
                loading="lazy"
                decoding="async"
              />
              <div>
                <b>{x.name}</b>
                <div className="sub">{x.duration}</div>
              </div>
            </div>
            <p>
              ★★★★★ · {x.time}
            </p>
            <p className="review-text">{x.text}</p>
          </article>
        ))}
      </div>
      <button className="pill">Show all {LISTING.reviews} reviews</button>
    </section>
  );
}
