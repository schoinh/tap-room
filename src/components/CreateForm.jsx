import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CreateForm(props) {
  let _name = null;
  let _brand = null;
  let _description = null;
  let _flavor = null;
  let _price = null;

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.onNewKegCreation(
      {
        name: _name.value,
        brand: _brand.value,
        description: _description.value,
        flavor: _flavor.value,
        price: parseInt(_price.value),
        pintsLeft: 124
      }
    );
  };

  return (
    <div>
      <h1>Add a New Keg</h1>
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
        <label htmlFor="flavor">Flavor </label>
        <select
          name="flavor"
          ref={(input) => { _flavor = input; }}>
          <option value="Herbal">Herbal</option>
          <option value="Fruity">Fruity</option>
        </select><br />
        $ <input
          type="number"
          placeholder="Price per Pint"
          ref={(input) => { _price = input; }} /><br /><br />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      <hr />
      <Link to="/employees">Back</Link>
    </div>
  );
}

CreateForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default CreateForm;