import siteConfig from "../data/siteConfig";
import photos from "../data/photos";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import "./About.css";

const values = [
  {
    title: "Honesty over commission",
    text: "We recommend courses and universities based on fit, not on which one pays the best referral fee.",
  },
  {
    title: "One counsellor, start to finish",
    text: "You work with the same person from your first session through visa filing — no handoffs, no repeating your story.",
  },
  {
    title: "Support past the visa",
    text: "Pre-departure briefings, accommodation guidance and check-ins after you land are part of the package, not an upsell.",
  },
];

function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Built by people who've sat where you're sitting</h1>
          <p>
            Good Way Abroad Consultant was started to fix a simple problem: too many students
            were getting generic advice built around commissions, not around them.
          </p>
        </div>
      </div>
      <Breadcrumb trail={[{ label: "About Us" }]} />

      <section className="section">
        <div className="container grid-2">
          <img src={photos.aboutOffice} alt="Good Way Abroad counselling team at the Hyderabad office" className="about-image" />
          <div>
            <h2>Our story</h2>
            <p>
              Good Way Abroad Consultant is based in Hyderabad and works with students across
              Andhra Pradesh and Telangana who want to study in the USA, UK, Canada, Australia,
              Europe, New Zealand, France and Ireland. We started small, on the belief that a
              student's first big decision — where and what to study abroad — deserves more
              than a sales pitch.
            </p>
            <p>
              Today, our counsellors have guided thousands of students through the full
              journey: course and country selection, test preparation, applications, loans,
              visas and the messy, practical business of actually moving to a new country.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--sky">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What we stand for</span>
            <h2>Three things we don't compromise on</h2>
          </div>
          <div className="grid-3">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">Visit us</span>
            <h2>Come in for a face-to-face session</h2>
          </div>
          <div className="office-grid">
            {siteConfig.offices.map((office) => (
              <div className="office-card" key={office.city}>
                <h3>{office.city} Office</h3>
                <p>{office.address}</p>
                <p>
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export default About;
