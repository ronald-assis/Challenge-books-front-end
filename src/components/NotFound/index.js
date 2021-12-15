import React from "react";
import notFound from "../../images/notFound.svg";
import Header from "../Header";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found-body">
      <Header />
      <div className="not-found">
        <img src={notFound} alt="Not Found" />
      </div>
    </div>
  );
};

export default NotFound;
