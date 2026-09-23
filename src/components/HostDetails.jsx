import LISTING, { getOptimizedImageUrl } from "../data/listingData";

const COHOSTS = [
  "Sharath",
  "Aman Dev Pahwa",
  "Maria Karen Priyanka",
  "Simran",
  "Pallavi",
  "Sanyukta",
  "Shruti",
  "Amisha",
];

export default function HostDetails() {
  return (
    <section className="section host-section">
      <h2>Meet your host</h2>
      <div className="host-detail-grid">
        <div className="host-card">
          <img
            className="host-brand"
            src={getOptimizedImageUrl(LISTING.hostAvatar, 120, 75)}
            alt="Host"
            loading="lazy"
            decoding="async"
          />
          <div className="host-name">{LISTING.host}</div>
          <div className="host-role">Host</div>
          <div className="host-stats">
            <b>1,463</b>
            <span>Reviews</span>
            <b>4.68★</b>
            <span>Rating</span>
            <b>{LISTING.yearsHosting}</b>
            <span>Years hosting</span>
          </div>
        </div>
        <div className="cohosts">
          <h3>Co-Hosts</h3>
          <div className="cohost-grid">
            {COHOSTS.map((name) => (
              <div key={name}>● {name}</div>
            ))}
          </div>
          <h3>Host details</h3>
          <p>
            Response rate: 100%
            <br />
            Responds within an hour
          </p>
          <button className="message-host">Message host</button>
        </div>
      </div>
    </section>
  );
}
