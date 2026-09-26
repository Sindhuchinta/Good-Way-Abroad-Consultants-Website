import { Link } from "react-router-dom";
import countries from "../data/countries";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import "./Listing.css";

function StudyAbroad() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Pick a country that fits your goals, not just your shortlist</h1>
          <p>
            Every country has a different mix of cost, work rights and course strength. Here's
            an honest breakdown of the eight destinations we place students into.
          </p>
        </div>
      </div>
      <Breadcrumb trail={[{ label: "Study Abroad" }]} />

      <section className="section listing-section">
        <div className="container">
          <div className="grid-listing">
            {countries.map((c) => (
              <Link to={`/study-abroad/${c.slug}`} className="listing-card" key={c.slug}>
                <img src={c.photo} alt={`Study in ${c.fullName}`} loading="lazy" style={{ objectPosition: c.photoPosition || "center" }} />
                <div className="listing-card__body">
                  <h3>Study in {c.fullName}</h3>
                  <p>{c.tagline}</p>
                  <span className="card-link">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which country suits you?"
        subtitle="Our counsellors will compare options against your budget and goals for free."
      />
    </>
  );
}

export default StudyAbroad;
