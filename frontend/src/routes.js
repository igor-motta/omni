import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewNote from "./pages/NewNote";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/notes/new" component={NewNote} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
