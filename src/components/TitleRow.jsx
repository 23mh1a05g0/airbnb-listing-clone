import LISTING from "../data/listingData";

export default function TitleRow() {
  return (
    <div className="title-row">
      <h1>{LISTING.title}</h1>
      <div className="title-actions">
        <button className="link-btn">↗ Share</button>
        <button className="link-btn">♡ Save</button>
      </div>
    </div>
  );
}
