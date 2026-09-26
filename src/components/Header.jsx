import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import countries from "../data/countries";
import services from "../data/services";
import siteConfig from "../data/siteConfig";
import headerLogo from "../assets/header-logo.png";
import "./Header.css";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Link to="/" className="brand" onClick={closeAll}>
          <img className="brand__header-logo" src={headerLogo} alt={`${siteConfig.name} logo`} />
        </Link>

        <nav className={`main-nav ${mobileOpen ? "main-nav--open" : ""}`}>
          <div
            className="main-nav__item has-dropdown"
            onMouseEnter={() => setOpenMenu("study")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="main-nav__trigger"
              onClick={() => setOpenMenu(openMenu === "study" ? null : "study")}
            >
              Study Abroad <span aria-hidden="true">▾</span>
            </button>
            <div className={`dropdown ${openMenu === "study" ? "dropdown--open" : ""}`}>
              <Link to="/study-abroad" onClick={closeAll} className="dropdown__all">
                All destinations
              </Link>
              {countries.map((c) => (
                <Link key={c.slug} to={`/study-abroad/${c.slug}`} onClick={closeAll}>
                  Study in {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="main-nav__item has-dropdown"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className="main-nav__trigger"
              onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
            >
              Our Services <span aria-hidden="true">▾</span>
            </button>
            <div className={`dropdown ${openMenu === "services" ? "dropdown--open" : ""}`}>
              <Link to="/services" onClick={closeAll} className="dropdown__all">
                All services
              </Link>
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} onClick={closeAll}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/faqs" onClick={closeAll} className="main-nav__item">
            FAQs
          </NavLink>
          <NavLink to="/about-us" onClick={closeAll} className="main-nav__item">
            About Us
          </NavLink>
          <NavLink to="/news" onClick={closeAll} className="main-nav__item">
            News
          </NavLink>

          <Link to="/contact" onClick={closeAll} className="btn btn--primary main-nav__cta">
            Book Free Counselling
          </Link>
        </nav>

        <button
          className={`menu-toggle ${mobileOpen ? "menu-toggle--open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
