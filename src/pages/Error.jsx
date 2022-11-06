import { Link } from "react-router-dom";

import "./Error.css";
const Error = () => {
  return (
    <div className="error-page">
      <div className="error-btn">
        <Link to="/">Back to Homepage</Link>
      </div>
    </div>
     
  );
};

export default Error;
