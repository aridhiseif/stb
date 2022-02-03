import React, { useState } from "react";
import "./archive.css";
import ArchRecord from "./ArchRecord";

async function getCheque() {
  return fetch("http://localhost:3200/get_cheque")
    .then((response) => response.json())
    .then((theData) => theData);
}

function Archive() {
  const [ArchArray, setArchArray] = useState([]);

  const refBtn = async (e) => {
    console.log(await getCheque());
    setArchArray(await getCheque());
    console.log(ArchArray);
  };
  return (
    <div className="archContainer">
      <div className="archHeader">
        <div>
          <h1>Archive</h1>
        </div>
        <div>
          <button className="refBtn" onClick={() => refBtn()}>
            reflesh
          </button>
        </div>
      </div>
      <div className="archBody">
        {ArchArray
          ? ArchArray.map((e) => {
              return (
                <ArchRecord
                  codeAg={e.codeAg}
                  Matriculation={e.matriculation}
                  montant={e.montant}
                  date={e.date}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Archive;
