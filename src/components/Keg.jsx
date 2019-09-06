import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div>
      <h2>
        {props.name} - {props.brand}<br />
        ${props.price}
      </h2>
      <p>{props.pintsLeft} pints left</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pintsLeft: PropTypes.number
};

export default Keg;