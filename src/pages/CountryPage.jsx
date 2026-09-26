import { useParams, Link, Navigate } from "react-router-dom";
import countries from "../data/countries";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import "./Detail.css";

function CountryPage() {
  const { slug } = useParams();
  const country = countries.find((c) => c.slug === slug);

  if (!country) return <Navigate to="/study-abroad" replace />;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Study in {country.fullName}</h1>
          <p>{country.tagline}</p>
        </div>
      </div>
      <Breadcrumb
        trail={[
          { label: "Study Abroad", to: "/study-abroad" },
          { label: country.fullName },
        ]}
      />

      <section className="section detail-section">
        <div className="container">
          <div className="detail-banner">
            <img src={country.photo} alt={`Students in ${country.fullName}`} style={{ objectPosition: country.photoPosition || "center" }} />
          </div>
          <div className="grid-2">
            <div>
              <h2>Why students choose {country.fullName}</h2>
              <ul className="detail-list">
                {country.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="detail-subhead">Popular courses</h3>
              <div className="pill-row">
                {country.popularCourses.map((c) => (
                  <span className="pill" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sky">
        <div className="container">
          <div className="fact-grid">
            <div className="fact">
              <span>Typical Intakes</span>
              <b>{country.intake}</b>
            </div>
            <div className="fact">
              <span>Average Cost</span>
              <b>{country.avgCost}</b>
            </div>
            <div className="fact">
              <span>Work Rights</span>
              <b>{country.workRights}</b>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container other-countries">
          <h3>Other destinations</h3>
          <div className="chip-row">
            {countries
              .filter((c) => c.slug !== country.slug)
              .map((c) => (
                <Link to={`/study-abroad/${c.slug}`} className="chip" key={c.slug}>
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to explore ${country.fullName}?`}
        subtitle="Book a free session and we'll tell you honestly if it's the right fit."
      />
    </>
  );
}

export default CountryPage;
