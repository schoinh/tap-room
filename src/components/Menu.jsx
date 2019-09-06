import React from "react";
import FlavorGroup from "./FlavorGroup";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <FlavorGroup flavor="herbal" />
      <hr />
      <FlavorGroup flavor="fruity" />
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Menu;