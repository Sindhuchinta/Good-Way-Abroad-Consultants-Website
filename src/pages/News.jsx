import news from "../data/news";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import "./Home.css";

function News() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Latest updates</h1>
          <p>Practical guidance on tests, applications, loans and life after landing.</p>
        </div>
      </div>
      <Breadcrumb trail={[{ label: "News" }]} />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {news.map((n) => (
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
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export default News;
