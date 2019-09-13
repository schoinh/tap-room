import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function FlavorGroup(props) {
  var headerStyles = {
    fontFamily: "Courgette, cursive",
    color: "#b9e567",
    marginBottom: "20px"
  };

  var filteredList = props.kombuchaList.filter(kombucha => kombucha.flavor == props.flavor);

  return (
    <div>
      <h1 style={headerStyles}>{props.flavor}</h1>
      {filteredList.map((kombucha) =>
        <Kombucha
          name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          description={kombucha.description}
          pintsLeft={kombucha.pintsLeft}
          key={kombucha.id} />
      )}
    </div>
  );
}

FlavorGroup.propTypes = {
  flavor: PropTypes.string,
  kombuchaList: PropTypes.array
};

export default FlavorGroup;