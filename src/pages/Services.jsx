import { Link } from "react-router-dom";
import services from "../data/services";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import "./Listing.css";

function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Support at every stage of going abroad</h1>
          <p>
            From your first counselling session to settling into a new city, here's exactly
            what we take off your plate.
          </p>
        </div>
      </div>
      <Breadcrumb trail={[{ label: "Our Services" }]} />

      <section className="section listing-section">
        <div className="container">
          <div className="grid-listing">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="listing-card" key={s.slug}>
                <img src={s.photo} alt={s.name} loading="lazy" style={{ objectPosition: s.photoPosition || "center" }} />
                <div className="listing-card__body">
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="card-link">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export default Services;
