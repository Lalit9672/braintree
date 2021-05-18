import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Cart from "./comps/Cart";
import Header from "./comps/Header";
import Home from "./comps/Home";
const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="app-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
