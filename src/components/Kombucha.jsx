import React from "react";
import PropTypes from "prop-types";

function Kombucha(props) {
  return (
    <div>
      <h3>{props.name} - {props.brand}</h3>
      <h5><i>{props.description}</i></h5>
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