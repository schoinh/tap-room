import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Keg(props) {
  var kegCard = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "black",
    padding: "10px",
    margin: "10px"
  };

  return (
    <div style={kegCard}>
      <Link to="/edit-keg"><button>Edit</button></Link>
      <button>Remove</button>
      <h2>
        {props.name} - {props.brand}<br />
        ${props.price}
      </h2>
      <p>
        Pints left: {props.pintsLeft}
        <button>Pour 1 pt</button>
      </p>
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