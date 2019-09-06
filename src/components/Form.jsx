import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div>
      <form>
        <input placeholder="Name"></input><br />
        <input placeholder="Brand"></input><br />
        <input placeholder="Description"></input><br />
        <input placeholder="Flavor"></input><br />
        <input placeholder="Price"></input><br />
        <input placeholder="Pints Left"></input><br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <Link to="/employees">Back</Link>
    </div>
  );
}

export default Form;