import logo from "./logo.svg";
import { component, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginBox from "./components/LoginBox";
import Dashboard from "./components/DashBoard/Dashboard";

async function loginUser(credentials) {
  return fetch("http://localhost:3200/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((theData) => theData);
}

function App() {
  const [Ident, setId] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const Login = async (e) => {
    //  console.log(`identifiant est ${Id}`);
    // console.log(`Password est ${password}`);

    let body = {
      ident: Ident,
      password: password,
    };

    const Token = await loginUser(body);
    console.log("first console");
    console.log(Token);
    setToken(Token.token);
    console.log("second console");
    console.log(token);
  };

  return (
    <div style={container}>
      <NavBar />
      {token == "test123" ? (
        <Dashboard />
      ) : (
        <LoginBox setId={setId} setPassword={setPassword} Login={Login} />
      )}
    </div>
  );
}

const container = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
};

const body = {
  display: "flex",
  flex: 1,
  backgroundColor: "#6e6e6e",
  alignItems: "center",
  justifyContent: "center",
};

export default App;
