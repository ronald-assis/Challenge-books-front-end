import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const token = !!localStorage.getItem("token"); // "!!" transforma em boolean
  return token ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
