import logo from "./logo.svg";
import { component, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [Id, setId] = useState();
  const [password, setPassword] = useState();

  const Login = () => {
    console.log(`identifiant est ${Id}`);
    console.log(`Password est ${password}`);
  };

  return (
    <Router>
      <div style={container}>
        <div style={header}>
          <h1>aridhi seif</h1>
        </div>
        <div style={body}>
          <div style={loginBox}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
              <h1>Login</h1>
              <input
                type="text"
                className="textinput"
                placeholder="identifiant..."
                onChange={(e) => setId(e.target.value)}
              />
              <input
                type="password"
                className="passinput"
                placeholder="mot de passe...."
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                className="btn"
                value="Login"
                onClick={() => Login()}
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
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
