import React from "react";
import KegList from "./KegList";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function EmployeeView(props) {
  return (
    <div>
      <Link to="/add-keg"><button className="btn btn-warning">Add New Keg</button></Link>
      <hr />
      <KegList kegList={props.kegList} selectedKegId={props.selectedKegId} onKegSelection={props.onKegSelection} />
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

EmployeeView.propTypes = {
  kegList: PropTypes.array,
  selectedKegId: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default EmployeeView;