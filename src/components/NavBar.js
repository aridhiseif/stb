import React from "react";
import "./NavBar.css";
function NavBar({ token, setToken }) {
  return (
    <div style={header}>
      <div className="emptydiv"></div>
      <h1>STB</h1>
      {token ? (
        <button className="decBtn" onClick={() => setToken("")}>
          déconnecté
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
const header = {
  display: "flex",
  justifyContent: "space-between",
  color: "red",
  backgroundColor: "black",
  alignItems: "center",

  paddingTop: 20,
};

export default NavBar;
