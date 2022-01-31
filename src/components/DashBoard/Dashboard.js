import React, { useState } from "react";
import "./DashBoard.css";
import RDC from "./RDC";
import { Router, Route, Switch, Routes } from "react-router-dom";
import Archive from "./Archive/Archive";

const renderPages = (index) => {
  if (index == 1) {
    return <RDC />;
  } else if (index == 2) {
    return <Archive />;
  }
};

function Dashboard() {
  const [Index, setIndex] = useState(1);

  return (
    <div className="container">
      <div className="navbar">
        <button className="btnbar" onClick={() => setIndex(1)}>
          remise de cheque
        </button>
        <button className="btnbar">Button</button>
        <button className="btnbar" onClick={() => setIndex(2)}>
          Archive
        </button>
      </div>

      <div className="DBbody">{renderPages(Index)}</div>
    </div>
  );
}

export default Dashboard;
