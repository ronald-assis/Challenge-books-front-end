import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
// import AuthCotexts from "./context/AuthCotexts";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
