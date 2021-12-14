import React from "react";
import { useHistory } from "react-router-dom";
import notFound from "../../images/notFound.svg";
import blackLogo from "../../images/black-logo.svg";
import LogOut from "../../images/logOut.svg";
import "./notFound.css";

const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
    localStorage.removeItem("token");
  };
  return (
    <div className="not-found-body">
      <header className="not-found-header">
        <div className="header-logo">
          <img src={blackLogo} alt="Ioasys black logo" />
          <span>Books</span>
        </div>
        <div className="header-wellcome">
          <p>Infelizmente, algo deu errado!</p>
          <button type="button" onClick={handleClick}>
            <img src={LogOut} alt="Log Out" />
          </button>
        </div>
      </header>
      <div className="not-found">
        <img src={notFound} alt="Not Found" />
      </div>
    </div>
  );
};

export default NotFound;
