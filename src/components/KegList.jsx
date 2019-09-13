import React from "react";
import KegGroup from "./KegGroup";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <div>
      <KegGroup status="Running Low (< 10 pt)" kegList={props.kegList} />
      <hr />
      <KegGroup status="OK" kegList={props.kegList} />
    </div>
  );
}

KegList.propType = {
  kegList: PropTypes.array
};

export default KegList;