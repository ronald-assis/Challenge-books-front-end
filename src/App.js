import React from "react";
import signInApi from "./service/APIs";
import Login from "./components/Login";
import "./Global.css";

const App = () => {
  return (
    <div className="App">
      <Login />
      {console.log(signInApi("desafio@ioasys.com.br", "12341234"))}
    </div>
  );
};

export default App;
