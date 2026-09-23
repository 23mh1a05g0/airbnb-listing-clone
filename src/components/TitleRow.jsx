import LISTING from "../data/listingData";
import { ShareIcon, HeartIcon } from "./Icons";

export default function TitleRow() {
  return (
    <div className="title-row">
      <h1>{LISTING.title}</h1>
      <div className="title-actions">
        <button className="link-btn" aria-label="Share this listing">
          <ShareIcon size={16} />
          <span>Share</span>
        </button>
        <button className="link-btn" aria-label="Save this listing">
          <HeartIcon size={16} />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}
