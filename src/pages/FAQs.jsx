import { useState } from "react";
import faqs from "../data/faqs";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import "./FAQs.css";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Frequently asked questions</h1>
          <p>Straight answers to what most students ask before they get in touch.</p>
        </div>
      </div>
      <Breadcrumb trail={[{ label: "FAQs" }]} />

      <section className="section">
        <div className="container faq-wrap">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={i}>
                <button
                  className="faq-item__q"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="faq-item__a">{f.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner
        title="Still have questions?"
        subtitle="Ask a real counsellor — free of cost, no pressure to sign up."
      />
    </>
  );
}

export default FAQs;
