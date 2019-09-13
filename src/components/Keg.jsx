import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Keg(props) {
  var kegCard = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "lightgray",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px"
  };

  var editDeleteStyles = {
    marginRight: "5px"
  };

  var pourStyles = {
    marginLeft: "10px"
  };

  const handleEditButtonClick = () => {
    console.log("handler activated");
    props.onKegSelection(props.kegId, props.name);
  };

  return (
    <div style={kegCard}>
      <Link to="/edit-keg">
        <button onClick={() => { handleEditButtonClick(); }} style={editDeleteStyles} className="btn btn-outline-info">Edit</button>
      </Link>
      <button onClick={() => { }} className="btn btn-outline-danger">Remove</button>
      <h2>
        {props.name} - {props.brand}<button style={pourStyles} className="btn btn-primary">Pour</button><br />
        ${props.price}
      </h2>
      <h5>
        Pints Left: {props.pintsLeft}
      </h5>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  kegId: PropTypes.string,
  pintsLeft: PropTypes.number,
  selectedKegId: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default Keg;