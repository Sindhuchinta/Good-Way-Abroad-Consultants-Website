import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <h1>Page not found</h1>
        <p style={{ margin: "0 auto 24px" }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
