import React from "react";
import "./DashBoard.css";
function RDC() {
  return (
    <div style={{ paddingLeft: 5 }}>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "column", width: 320 }}>
        <div className="Inputdiv">
          <p>code d'agence</p>
          <input type="number" className="RDCInput" />
        </div>
        <div className="Inputdiv">
          <p>matriculation</p>
          <input type="number" className="RDCInput" />
        </div>
        <div className="Inputdiv">
          <p>montant</p>
          <input type="number" className="RDCInput" />
        </div>
        <div className="Inputdiv">
          <p>date</p>
          <input type="number" className="RDCInput" />
        </div>

        <div className="btnDiv">
          <button className="btnEnr"> enregistrer</button>
        </div>
      </div>
    </div>
  );
}

export default RDC;
