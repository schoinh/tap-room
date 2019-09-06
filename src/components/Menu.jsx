import React from "react";
import FlavorGroup from "./FlavorGroup";

function Menu() {
  return (
    <div>
      <FlavorGroup
        flavor="herbal" />
      <hr />
      <FlavorGroup
        flavor="fruity" />
    </div>
  );
}

export default Menu;