import logo from "./logo.svg";
import { component, useState } from "react";
import "./App.css";

function App() {
  const [Id, setId] = useState();
  const [password, setPassword] = useState();

  return (
    <div style={container}>
      <div style={header}>
        <h1>aridhi seif</h1>
      </div>
      <div style={body}>
        <div style={loginBox}>
          <form action="#" method="post" className="inputZone">
            <h1>Login</h1>
            <input
              type="text"
              className="textinput"
              placeholder="identifiant..."
            />
            <input
              type="password"
              className="passinput"
              placeholder="mot de passe...."
            />
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
};

const header = {
  display: "flex",

  color: "red",
  backgroundColor: "black",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 20,
};
const body = {
  display: "flex",
  flex: 1,
  backgroundColor: "#6e6e6e",
  alignItems: "center",
  justifyContent: "center",
};

const loginBox = {
  width: 350,
  height: 450,
  backgroundColor: "#ffffff",
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
};
export default App;
