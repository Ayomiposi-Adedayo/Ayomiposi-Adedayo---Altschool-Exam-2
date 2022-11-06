import { Link } from "react-router-dom";

import "./Error.css";
const Error = () => {
  return (
    <div className="error-page">
      <p>404 : Page not found</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default Error;
