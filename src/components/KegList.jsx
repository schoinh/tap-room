import React from "react";
import KegGroup from "./KegGroup";

function KegList() {
  return (
    <div>
      <KegGroup status="Running Low" />
      <hr />
      <KegGroup status="ok" />
    </div>
  );
}

export default KegList;