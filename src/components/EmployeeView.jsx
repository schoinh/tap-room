import React from "react";
import KegList from "./KegList";
import { Link } from "react-router-dom";

function EmployeeView() {
  return (
    <div>
      <button>Add New Keg</button>
      <KegList />
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeView;