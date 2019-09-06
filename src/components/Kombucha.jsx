import React from "react";
import PropTypes from "prop-types";

function Kombucha(props) {
  return (
    <div>
      <h2>{props.name} - {props.brand}</h2>
      <h4>{props.description}</h4>
      <p>${props.price}</p>
    </div>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
};

export default Kombucha;