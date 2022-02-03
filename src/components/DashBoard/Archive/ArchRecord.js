import React from "react";
import "./archive.css";

function ArchRecord({ codeAg, Matriculation, montant, date }) {
  return (
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
        <button>delete</button>
        <button>modify</button>
      </div>
    </div>
  );
}

export default ArchRecord;
