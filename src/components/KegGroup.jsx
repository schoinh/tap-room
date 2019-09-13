import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegGroup(props) {
  var filteredList;
  var headerStyles;

  if (props.status == "Running Low (10 pt or Less)") {
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
          description={keg.description}
          flavor={keg.flavor}
          price={keg.price}
          pintsLeft={keg.pintsLeft}
          key={keg.id}
          kegId={keg.id}
          selectedKeg={props.selectedKeg}
          onKegSelection={props.onKegSelection}
          onPour={props.onPour} />
      )}
    </div>
  );
}

KegGroup.propTypes = {
  status: PropTypes.string,
  kegList: PropTypes.array,
  selectedKeg: PropTypes.object,
  onKegSelection: PropTypes.func,
  onPour: PropTypes.func
};

export default KegGroup;