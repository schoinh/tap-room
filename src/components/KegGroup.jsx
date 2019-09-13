import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegGroup(props) {
  var filteredList;
  var headerStyles;

  if (props.status == "Running Low (< 10 pt)") {
    filteredList = props.kegList.filter(kombucha => kombucha.pintsLeft <= 10);
    if (filteredList.length != 0) {
      headerStyles = {
        color: "Red"
      };
    }
  } else {
    filteredList = props.kegList.filter(kombucha => kombucha.pintsLeft > 10);
    headerStyles = {
      color: "Green"
    };
  }

  return (
    <div>
      <h1 style={headerStyles}>{props.status}</h1>
      {filteredList.map((kombucha, index) =>
        <Keg
          name={kombucha.name}
          brand={kombucha.brand}
          price={kombucha.price}
          pintsLeft={kombucha.pintsLeft}
          key={index} />
      )}
    </div>
  );
}

KegGroup.propTypes = {
  status: PropTypes.string,
  kegList: PropTypes.array
};

export default KegGroup;