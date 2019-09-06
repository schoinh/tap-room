import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";
import kombuchaList from "../assets/data/KombuchaList";

function FlavorGroup(props) {
  var filteredList = kombuchaList.filter(kombucha => kombucha.flavor == props.flavor);

  return (
    <div>
      <h1>{props.flavor.toUpperCase()}</h1>
      {filteredList.map((kombucha, index) =>
        <Kombucha
          name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          description={kombucha.description}
          key={index} />
      )}
    </div>
  );
}

FlavorGroup.propTypes = {
  flavor: PropTypes.string
};

export default FlavorGroup;