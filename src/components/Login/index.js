import React from "react";
import Form from "../Form";
import whiteLogo from "../../images/white-logo.svg";
import "./login.css";

const Login = () => {
  return (
    <div className="login-background">
      <div className="form-body">
        <div className="form-header">
          <img src={whiteLogo} alt="Ioasys white logo" />
          <span>Books</span>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Login;
