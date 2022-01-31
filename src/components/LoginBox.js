import React from "react";

function LoginBox({ setId, setPassword, Login }) {
  return (
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
  );
}

const loginBox = {
  width: 350,
  height: 450,
  backgroundColor: "#ffffff",
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
};
const body = {
  display: "flex",
  flex: 1,
  backgroundColor: "#6e6e6e",
  alignItems: "center",
  justifyContent: "center",
};
export default LoginBox;
