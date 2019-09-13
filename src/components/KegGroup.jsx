import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegGroup(props) {
  var filteredList;
  var headerStyles;

  if (props.status == "Running Low (< 10 pt)") {
    filteredList = props.kegList.filter(keg => keg.pintsLeft <= 10);
    if (filteredList.length != 0) {
      headerStyles = {
        color: "Red"
      };
    }
  } else {
    filteredList = props.kegList.filter(keg => keg.pintsLeft > 10);
    headerStyles = {
      color: "Green"
    };
  }

  return (
    <div>
      <h1 style={headerStyles}>{props.status}</h1>
      {filteredList.map((keg) =>
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          pintsLeft={keg.pintsLeft}
          key={keg.id}
          kegId={keg.id}
          selectedKegId={props.selectedKegId}
          onKegSelection={props.onKegSelection} />
      )}
    </div>
  );
}

KegGroup.propTypes = {
  status: PropTypes.string,
  kegList: PropTypes.array,
  selectedKegId: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegGroup;