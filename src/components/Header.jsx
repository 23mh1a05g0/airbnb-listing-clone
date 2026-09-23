import {
  AirbnbLogo,
  SearchIcon,
  GlobeIcon,
  MenuBarsIcon,
  UserAvatarIcon,
} from "./Icons";

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="logo-brand" aria-label="Airbnb Home">
        <AirbnbLogo size={34} className="logo-icon" />
        <span className="logo-text">airbnb</span>
      </a>

      <div className="search" role="search">
        <span className="search-opt">Anywhere</span>
        <span className="search-opt">Any week</span>
        <span className="search-opt search-opt-muted">Add guests</span>
        <button className="search-submit-btn" aria-label="Search">
          <SearchIcon size={14} />
        </button>
      </div>

      <div className="header-actions">
        <button className="host-btn">Become a host</button>
        <button className="icon-btn" aria-label="Choose language and region">
          <GlobeIcon size={18} />
        </button>
        <button className="menu" aria-label="User menu">
          <MenuBarsIcon size={16} />
          <UserAvatarIcon size={30} />
        </button>
      </div>
    </header>
  );
}
