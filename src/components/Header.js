
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-top">

        <a className="logo" href="/">
          <img src="/logo.png" alt="" className="logo-icon" />
          <span>airbnb</span>
        </a>

        <nav className="header-nav">
          <button className="active" type="button">Stays</button>
          <button type="button">Experiences</button>
        </nav>

        <div className="header-actions">

          <button className="host-button" type="button">
            Airbnb your home
          </button>

          <button className="language-button" type="button">
            <img src="/icons/globe.png" alt="Language" />
          </button>

          <button className="profile-button" type="button">
            <img src="/icons/menu.png" alt="" />
            <img src="/icons/profile.png" alt="Profile" />
          </button>

        </div>

      </div>

      <div className="search-bar">

        <label className="search-field">
          <span>Where</span>
          <input type="text" placeholder="Search destinations" />
        </label>

        <label className="search-field">
          <span>Check in</span>
          <input type="text" placeholder="Add dates" />
        </label>

        <label className="search-field">
          <span>Check out</span>
          <input type="text" placeholder="Add dates" />
        </label>

        <label className="search-field">
          <span>Who</span>
          <input type="text" placeholder="Add guests" />
        </label>

        <button className="search-button" type="button">
          <img src="/icons/search.png" alt="Search" />
        </button>

      </div>

    </header>
  );
}

export default Header;
