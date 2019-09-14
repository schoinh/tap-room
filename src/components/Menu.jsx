import React from "react";
import FlavorGroup from "./FlavorGroup";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Menu(props) {
  return (
    <div>
      <FlavorGroup
        kombuchaList={props.kombuchaList}
        flavor="Herbal" />
      <hr />
      <FlavorGroup
        kombuchaList={props.kombuchaList}
        flavor="Fruity" />
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

Menu.propTypes = {
  kombuchaList: PropTypes.array
};

export default Menu;