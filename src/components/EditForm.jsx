import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function EditForm(props) {
  let _name = null;
  let _brand = null;
  let _description = null;
  let _flavor = null;
  let _price = null;
  let _pintsLeft = null;

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.onKegEdit(
      {
        name: _name.value,
        brand: _brand.value,
        description: _description.value,
        flavor: _flavor.value,
        price: parseInt(_price.value),
        pintsLeft: _pintsLeft.value
      }
    );
  };

  return (
    <div>
      <h1>Edit Keg: {props.kegToEdit.name}</h1>
      <hr />
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="Name"
          ref={(input) => { _name = input; }} /><br />
        <input
          type="text"
          placeholder="Brand"
          ref={(input) => { _brand = input; }} /><br />
        <input
          type="text"
          placeholder="Description"
          ref={(input) => { _description = input; }} /><br />
        <input
          type="text"
          placeholder="Flavor"
          ref={(input) => { _flavor = input; }} /><br />
        <input
          type="number"
          placeholder="Price per Pint"
          ref={(input) => { _price = input; }} /><br />
        <input
          type="number"
          placeholder="Pints Left"
          ref={(input) => { _pintsLeft = input; }} /><br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <Link to="/employees">Back</Link>
    </div>
  );
}

EditForm.propTypes = {
  onKegEdit: PropTypes.func,
  kegToEdit: PropTypes.object
};

export default EditForm;