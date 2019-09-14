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

  // Passes existing keg info to EditForm, via the selectedKeg state in App
  const handleEditButtonClick = () => {
    props.onKegSelection({
      name: props.name,
      brand: props.brand,
      description: props.description,
      flavor: props.flavor,
      price: parseInt(props.price),
      pintsLeft: parseInt(props.pintsLeft),
      id: props.kegId
    });
  };

  const handlePourButtonClick = () => {
    props.onPour(props.kegId);
  };

  const handleDeleteButtonClick = () => {
    props.onKegDelete(props.kegId);
  };

  return (
    <div style={kegCard}>
      <Link to="/edit-keg">
        <button
          onClick={() => { handleEditButtonClick(); }}
          style={editDeleteStyles}
          className="btn btn-outline-info">
          Edit</button>
      </Link>
      <button
        onClick={() => { handleDeleteButtonClick(); }}
        style={editDeleteStyles}
        className="btn btn-outline-danger">
        Remove</button>
      <h2>
        {props.name} - {props.brand}
        <button
          onClick={() => { handlePourButtonClick(); }}
          style={pourStyles}
          className="btn btn-primary">
          Pour</button><br />
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
  description: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  kegId: PropTypes.string,
  pintsLeft: PropTypes.number,
  onKegSelection: PropTypes.func,
  onPour: PropTypes.func,
  onKegDelete: PropTypes.func
};

export default Keg;