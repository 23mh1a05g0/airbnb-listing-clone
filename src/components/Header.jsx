export default function Header() {
  return (
    <header className="site-header">
      <b className="logo">airbnb</b>
      <div className="search">
        <span>⌂ Anywhere</span>
        <span>Anytime</span>
        <span>Add guests</span>
        <button aria-label="Search">⌕</button>
      </div>
      <div className="header-actions">
        <button>Become a host</button>
        <button aria-label="Choose language and region">🌐</button>
        <button className="menu" aria-label="Open menu">
          ☰ ◉
        </button>
      </div>
    </header>
  );
}
