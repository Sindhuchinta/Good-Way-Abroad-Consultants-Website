import { Link } from "react-router-dom";
import countries from "../data/countries";
import services from "../data/services";
import news from "../data/news";
import photos from "../data/photos";
import CtaBanner from "../components/CtaBanner";
import Flag from "../components/Flag";
import ServiceIcon from "../components/ServiceIcon";
import "./Home.css";

const steps = [
  {
    n: "01",
    title: "Consult",
    text: "A free session to understand your goals, budget and academic background.",
  },
  {
    n: "02",
    title: "Shortlist",
    text: "We match you to realistic courses and universities, not just popular ones.",
  },
  {
    n: "03",
    title: "Apply",
    text: "SOPs, LORs, loans and visa filing — handled with you, step by step.",
  },
  {
    n: "04",
    title: "Fly",
    text: "Pre-departure briefing so your first month abroad isn't a guessing game.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__flightline" aria-hidden="true"></div>
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="trust-badge">🎓 Trusted by 4,800+ Students</span>
            <h1>
              Your path abroad,
              <br />
              planned properly.
            </h1>
            <p className="hero__lead">
              Good Way Abroad Consultant helps students across Telangana turn a study-abroad
              idea into a boarding pass — with honest counselling, real timelines and support
              that doesn't stop at the visa stamp.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">
                Book Free Counselling
              </Link>
              <Link to="/study-abroad" className="btn btn--outline-navy">
                Explore Destinations
              </Link>
            </div>
            <ul className="hero__checklist">
              <li>✓ 97% Visa Success Rate</li>
              <li>✓ 350+ Partner Universities</li>
              <li>✓ End-to-End Support</li>
            </ul>
          </div>
          <div className="hero__media">
            <img src={photos.hero} alt="Student checking flight departures at the airport" />
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="section-kicker">Where you could be studying next</span>
            <h2>Popular Study Destinations</h2>
            <p>Explore top countries for international students</p>
          </div>
          <div className="flag-grid">
            {countries.map((c) => (
              <Link to={`/study-abroad/${c.slug}`} className="flag-card" key={c.slug}>
                <span className="flag-card__circle">
                  <Flag code={c.flag} />
                </span>
                <h3>{c.fullName}</h3>
                <p>{c.shortStat}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--sky">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What we help with</span>
            <h2>Everything between "I want to study abroad" and departure day</h2>
          </div>
          <div className="grid-3">
            {services.slice(0, 6).map((s, i) => (
              <div
                className={`card ${i % 3 === 1 ? "card--purple" : i % 3 === 2 ? "card--gold" : ""}`}
                key={s.slug}
              >
                <ServiceIcon type={s.icon} className={i % 3 === 1 ? "service-icon--purple" : i % 3 === 2 ? "service-icon--gold" : ""} />
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <Link to={`/services/${s.slug}`} className="card-link">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="section-kicker">How it works</span>
            <h2>Four steps, start to boarding gate</h2>
          </div>
          <div className="steps-row">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--navy">
        <div className="container grid-2">
          <div>
            <span className="section-kicker" style={{ color: "var(--gold)" }}>
              Why Good Way Abroad
            </span>
            <h2>We say no when a course isn't right for you.</h2>
            <p>
              A lot of consultancies push whichever university pays the best commission. We'd
              rather tell you honestly if a course, country or budget doesn't add up — because
              a student who succeeds abroad is worth more to us long-term than one rushed
              application.
            </p>
            <ul className="why-list">
              <li>Counsellors who've handled 4,800+ real applications, not scripts</li>
              <li>Transparent fee structure explained before you sign anything</li>
              <li>Support continues after your visa — not just up to it</li>
            </ul>
          </div>
          <img src={photos.whyUs} alt="Counsellor guiding a student through university options" className="why-image" loading="lazy" />
        </div>
      </section>

      {/* NEWS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">From our desk</span>
            <h2>Latest guidance and updates</h2>
          </div>
          <div className="grid-3">
            {news.slice(0, 3).map((n) => (
              <article className="news-card" key={n.slug}>
                <img src={n.photo} alt={n.title} loading="lazy" style={{ objectPosition: n.photoPosition || "center" }} />
                <div className="news-card__body">
                  <span className="news-card__date">{n.date}</span>
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-more">
            <Link to="/news" className="card-link">
              See all updates →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export default Home;
