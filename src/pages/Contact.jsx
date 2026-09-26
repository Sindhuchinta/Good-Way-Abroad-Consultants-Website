import { useState } from "react";
import siteConfig from "../data/siteConfig";
import countries from "../data/countries";
import photos from "../data/photos";
import Breadcrumb from "../components/Breadcrumb";
import "./Contact.css";

const initialForm = { name: "", phone: "", email: "", country: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is connected yet — this simply confirms receipt in the UI.
    // Wire this up to your CRM, email service, or backend API to actually send it on.
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Book your free counselling session</h1>
          <p>Tell us a bit about your plans and a counsellor will call you back.</p>
        </div>
      </div>
      <Breadcrumb trail={[{ label: "Contact" }]} />

      <section className="section">
        <div className="container grid-2 contact-grid">
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <h3>Thanks, {form.name.split(" ")[0] || "there"}!</h3>
                <p>
                  We've noted your details. A counsellor will reach out on{" "}
                  {form.phone || "the number you shared"} within a day.
                </p>
                <button className="btn btn--outline-navy" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Full name
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </label>
                <label>
                  Email (optional)
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Preferred country
                  <select name="country" value={form.country} onChange={handleChange}>
                    <option value="">Not sure yet</option>
                    {countries.map((c) => (
                      <option key={c.slug} value={c.fullName}>
                        {c.fullName}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Anything you'd like us to know
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Course, intake you're targeting, current qualification, etc."
                  />
                </label>
                <button type="submit" className="btn btn--primary btn--block">
                  Request a call back
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <h3>Reach us directly</h3>
            <ul className="contact-info__list">
              <li>
                <span>Phone</span>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </li>
              <li>
                <span>WhatsApp</span>
                <a href={siteConfig.whatsappHref}>Chat with us</a>
              </li>
              {siteConfig.offices.map((office) => (
                <li key={office.city}>
                  <span>Office — {office.state}</span>
                  <p>{office.address}</p>
                </li>
              ))}
            </ul>
            <img
              src={photos.studentLife}
              alt="Student preparing her applications with Good Way Abroad"
              className="contact-photo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
