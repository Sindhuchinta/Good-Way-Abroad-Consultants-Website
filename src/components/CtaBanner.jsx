import { Link } from "react-router-dom";
import siteConfig from "../data/siteConfig";

function CtaBanner({
  title = "Ready to plan your move abroad?",
  subtitle = "Talk to a counsellor this week — no cost, no obligation.",
}) {
  return (
    <section className="section section--navy cta-banner">
      <div className="container cta-banner__row">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">
            Book Free Counselling
          </Link>
          <a href={siteConfig.phoneHref} className="btn btn--outline">
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
