import React from "react";
import KegList from "./KegList";
import { Link } from "react-router-dom";

function EmployeeView() {
  return (
    <div>
      <Link to="/add-keg"><button>Add New Keg</button></Link>
      <KegList />
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeView;