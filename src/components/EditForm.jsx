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
        pintsLeft: parseInt(_pintsLeft.value)
      }
    );
  };

  return (
    <div>
      <h1>Edit Keg: {props.kegToEdit.name}</h1>
      <hr />
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="Name"
          defaultValue={props.kegToEdit.name}
          ref={(input) => { _name = input; }} /><br />
        <label htmlFor="Name">Brand</label>
        <input
          type="text"
          name="Brand"
          defaultValue={props.kegToEdit.brand}
          ref={(input) => { _brand = input; }} /><br />
        <label htmlFor="Name">Description</label>
        <input
          type="text"
          name="Description"
          defaultValue={props.kegToEdit.description}
          ref={(input) => { _description = input; }} /><br />
        <label htmlFor="Name">Flavor</label>
        <select
          name="flavor"
          ref={(input) => { _flavor = input; }}>
          <option value="Herbal">Herbal</option>
          <option value="Fruity">Fruity</option>
        </select><br />
        <label htmlFor="Name">Price per Pint ($)</label>
        <input
          type="number"
          name="Price per Pint"
          defaultValue={props.kegToEdit.price}
          ref={(input) => { _price = input; }} /><br />
        <label htmlFor="Name">Pints Left</label>
        <input
          type="number"
          name="Pints Left"
          defaultValue={props.kegToEdit.pintsLeft}
          ref={(input) => { _pintsLeft = input; }} /><br /><br />
        <button className="btn btn-primary" type="submit">Submit</button>
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