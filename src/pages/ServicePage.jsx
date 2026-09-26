import { useParams, Link, Navigate } from "react-router-dom";
import services from "../data/services";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import "./Detail.css";

function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>{service.name}</h1>
          <p>{service.short}</p>
        </div>
      </div>
      <Breadcrumb
        trail={[
          { label: "Our Services", to: "/services" },
          { label: service.name },
        ]}
      />

      <section className="section detail-section">
        <div className="container">
          <div className="detail-banner">
            <img src={service.photo} alt={service.name} style={{ objectPosition: service.photoPosition || "center" }} />
          </div>
          <div className="grid-2">
            <div>
              <h2>What this covers</h2>
              <p>{service.description}</p>
            </div>
            <div>
              <h3 className="detail-subhead">What's included</h3>
              <ul className="detail-list">
                {service.included.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container other-countries">
          <h3>Other services</h3>
          <div className="chip-row">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link to={`/services/${s.slug}`} className="chip" key={s.slug}>
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export default ServicePage;
