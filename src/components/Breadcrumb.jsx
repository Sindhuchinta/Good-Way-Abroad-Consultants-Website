import { Link } from "react-router-dom";

function Breadcrumb({ trail }) {
  return (
    <div className="container breadcrumb">
      <Link to="/">Home</Link>
      {trail.map((item, i) => (
        <span key={i}>
          <span aria-hidden="true">/</span>{" "}
          {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;
