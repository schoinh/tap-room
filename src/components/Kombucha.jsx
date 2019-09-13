import React from "react";
import PropTypes from "prop-types";

function Kombucha(props) {
  const soldOut = {
    color: "red",
    fontStyle: "italic"
  };

  if (props.pintsLeft > 0) {
    return (
      <div>
        <h3>{props.name} - {props.brand}</h3>
        <h5><i>{props.description}</i></h5>
        <p>${props.price}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{props.name} - {props.brand} <span style={soldOut}>Sold Out</span></h3>
        <h5><i>{props.description}</i></h5>
        <p>${props.price}</p>
      </div>
    );
  }
}

Kombucha.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pintsLeft: PropTypes.number,
  description: PropTypes.string
};

export default Kombucha;