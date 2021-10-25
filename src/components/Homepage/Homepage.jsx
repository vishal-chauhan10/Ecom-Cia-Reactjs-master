import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div id="d1">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 id="artifyh1"> Artify </h1>
      <h3 id="buyh3">Buy Art on the fly!</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/products">
        <button renderAs="button" id="ss">
          START SHOPPING!
        </button>
      </Link>
    </div>
  );
}
export default Homepage;
