import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import kombuchaList from "../assets/data/KombuchaList";

function KegGroup(props) {
  var filteredList;

  if (props.status == "Running Low") {
    filteredList = kombuchaList.filter(kombucha => kombucha.pintsLeft <= 10);
  } else {
    filteredList = kombuchaList.filter(kombucha => kombucha.pintsLeft > 10);
  }

  return (
    <div>
      <h1>{props.status}</h1>
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
  status: PropTypes.string
};

export default KegGroup;