import React, { useState } from "react";
import "./DashBoard.css";

function RDC() {
  const [codeAg, setCodeAg] = useState();
  const [matriculation, setMatriculation] = useState();
  const [montant, setMontant] = useState();
  const [date, setDate] = useState();

  async function addCheque(credentials) {
    return fetch("http://localhost:3200/add_cheque", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((theData) => theData);
  }

  const enregis = async (e) => {
    /*   console.log(`
      codeAg:${codeAg},
      matriculation:${matriculation},
      montant:${montant},
      date:${date},
    `); */

    let body = {
      codeAg: codeAg,
      matriculation: matriculation,
      montant: montant,
      date: date,
    };
    alert("cheque added");
    const Cheque = await addCheque(body);
    console.log(Cheque);
  };

  return (
    <div className="DashContainer">
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "column", width: 320 }}>
        <div className="Inputdiv">
          <p>code d'agence :</p>
          <input
            type="number"
            className="RDCInput"
            onChange={(e) => setCodeAg(e.target.value)}
          />
        </div>
        <div className="Inputdiv">
          <p>matriculation :</p>
          <input
            type="number"
            className="RDCInput"
            onChange={(e) => setMatriculation(e.target.value)}
          />
        </div>
        <div className="Inputdiv">
          <p>montant :</p>
          <input
            type="number"
            className="RDCInput"
            onChange={(e) => setMontant(e.target.value)}
          />
        </div>
        <div className="Inputdiv">
          <p>date :</p>
          <input
            type="String"
            className="RDCInput"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="btnDiv">
          <button className="btnEnr" onClick={() => enregis()}>
            {" "}
            enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}

export default RDC;
