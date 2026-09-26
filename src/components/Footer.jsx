import { Link } from "react-router-dom";
import countries from "../data/countries";
import services from "../data/services";
import siteConfig from "../data/siteConfig";
import logo from "../assets/footer-circle-logo.png";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-col--brand">
          <div className="footer-logo">
            <span className="footer-logo__plate">
              <img src={logo} alt={`${siteConfig.name} logo`} />
            </span>
            <span className="footer-logo__text">
              <span className="footer-logo__name"><span className="footer-logo__good">Good</span> <span className="footer-logo__way">Way</span> <span className="footer-logo__abroad">Abroad</span></span>
              <span className="footer-logo__sub">Consultant</span>
            </span>
          </div>
          <p>
            Free, honest counselling for students headed abroad — from picking the right
            course to landing after your flight.
          </p>
          <div className="footer-social">
            <a href={siteConfig.social.instagram} aria-label="Instagram">IG</a>
            <a href={siteConfig.social.facebook} aria-label="Facebook">FB</a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn">IN</a>
            <a href={siteConfig.social.youtube} aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Study Abroad</h4>
          <ul>
            {countries.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to={`/study-abroad/${c.slug}`}>Study in {c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Book Free Counselling</Link></li>
          </ul>
          <h4 className="footer-col__contact-head">Reach us</h4>
          <ul>
            <li><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            {siteConfig.offices.map((office) => (
              <li key={office.city}>{office.address}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__row">
          <span>© {year} Good Way Abroad Consultant. All rights reserved.</span>
          <span className="footer-bottom__tagline">{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
