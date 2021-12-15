import React from "react";
import { useHistory } from "react-router-dom";
import blackLogo from "../../images/black-logo.svg";
import LogOut from "../../images/logOut.svg";
import "./header.css";

const Header = ({ user = "Infelizmente, algo deu errado!", wellcome = "" }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/login");
    localStorage.removeItem("token");
  };

  return (
    <header>
      <div className="header-logo">
        <img src={blackLogo} alt="Ioasys black logo" />
        <span>Books</span>
      </div>
      <div className="header-wellcome">
        <p>
          {wellcome} <span>{user}</span>
        </p>
        <button type="button" onClick={handleClick}>
          <img src={LogOut} alt="Log Out" />
        </button>
      </div>
    </header>
  );
};

export default Header;
