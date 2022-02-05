import React, { useState } from "react";
import "./archive.css";

async function deleteCheque(credentials) {
  return fetch("http://localhost:3200/delete_cheque", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((theData) => theData);
}

function ArchRecord({ _id, codeAg, Matriculation, montant, date }) {
  const [status, setStatus] = useState(true);

  const deleteBtn = async (e) => {
    setStatus(false);
    const deletedCheque = await deleteCheque({ _id: _id });
    console.log(await deletedCheque);
  };

  return (
    <>
      {status ? (
        <div className="archRecord">
          <div>
            <table>
              <tr>
                <th>
                  <p>code d'agence</p>
                </th>
                <th>
                  <p>Martriculation</p>
                </th>
                <th>
                  <p>Montant</p>
                </th>
                <th>
                  <p>Date</p>
                </th>
              </tr>
              <tr>
                <td>
                  <p>{codeAg}</p>
                </td>
                <td>
                  <p>{Matriculation}</p>
                </td>
                <td>
                  <p>{montant} </p>
                </td>
                <td>
                  <p>{date} </p>
                </td>
              </tr>
            </table>
          </div>

          <div>
            <button onClick={() => deleteBtn()}>delete</button>
            <button>modify</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ArchRecord;
