import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import blackLogo from "../../images/black-logo.svg";
import LogOut from "../../images/logOut.svg";
import "./header.css";

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
    localStorage.removeItem("token");
  };

  const Location = useLocation();
  return (
    <header>
      <div className="header-logo">
        <img src={blackLogo} alt="Ioasys black logo" />
        <span>Books</span>
      </div>
      <div className="header-wellcome">
        <p>
          Bem vindo, <span>{Location.state.params}</span>
        </p>
        <button type="button" onClick={handleClick}>
          <img src={LogOut} alt="Log Out" />
        </button>
      </div>
    </header>
  );
};

export default Header;
