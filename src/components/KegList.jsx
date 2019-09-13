import React from "react";
import KegGroup from "./KegGroup";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <div>
      <KegGroup status="Running Low (10 pt or Less)" kegList={props.kegList} selectedKeg={props.selectedKeg} onKegSelection={props.onKegSelection} onPour={props.onPour} />
      <hr />
      <KegGroup status="OK" kegList={props.kegList} selectedKeg={props.selectedKeg} onKegSelection={props.onKegSelection} onPour={props.onPour} />
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  selectedKeg: PropTypes.object,
  onKegSelection: PropTypes.func,
  onPour: PropTypes.func
};

export default KegList;