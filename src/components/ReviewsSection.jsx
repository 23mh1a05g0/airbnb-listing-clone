import LISTING, { getOptimizedImageUrl } from "../data/listingData";
import {
  LaurelBranchLeft,
  LaurelBranchRight,
  StarIcon,
  SparkleCleanIcon,
  TargetAccuracyIcon,
  KeyIcon,
  ChatBubbleIcon,
  LocationPinIcon,
  PriceTagIcon,
} from "./Icons";

const CATEGORIES = [
  { name: "Cleanliness", score: "5.0", icon: <SparkleCleanIcon size={28} /> },
  { name: "Accuracy", score: "5.0", icon: <TargetAccuracyIcon size={28} /> },
  { name: "Check-in", score: "5.0", icon: <KeyIcon size={28} /> },
  { name: "Communication", score: "5.0", icon: <ChatBubbleIcon size={28} /> },
  { name: "Location", score: "4.8", icon: <LocationPinIcon size={28} /> },
  { name: "Value", score: "4.8", icon: <PriceTagIcon size={28} /> },
];

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
          <LaurelBranchLeft size={52} className="laurel-branch" />
          <span>4.95</span>
          <LaurelBranchRight size={52} className="laurel-branch" />
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
        {CATEGORIES.map((cat) => (
          <div className="rating-category" key={cat.name}>
            <b>{cat.name}</b>
            <strong>{cat.score}</strong>
            <span className="rating-symbol">{cat.icon}</span>
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
                src={getOptimizedImageUrl(x.avatar, 96, 75, "webp")}
                alt={x.name}
                loading="lazy"
                decoding="async"
                width={40}
                height={40}
              />
              <div>
                <b>{x.name}</b>
                <div className="sub">{x.duration}</div>
              </div>
            </div>
            <div className="review-rating-row">
              <div className="stars-row" aria-label="5 stars">
                {[...Array(5)].map((_, s) => (
                  <StarIcon key={s} size={12} filled={true} />
                ))}
              </div>
              <span className="review-date">· {x.time}</span>
            </div>
            <p className="review-text">{x.text}</p>
          </article>
        ))}
      </div>
      <button className="pill">Show all {LISTING.reviews} reviews</button>
    </section>
  );
}
