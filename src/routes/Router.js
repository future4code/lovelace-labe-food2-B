import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import DetailsRestaurantPage from "../pages/DetailsRestaurantPage/DetailsRestaurantPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path={"/"} component={HomePage} />

        <Route exact path={"/cart"} component={CartPage} />

        <Route exact path={"/details"} component={DetailsRestaurantPage} />

        <Route exact path={"/login"} component={LoginPage} />

        <Route exact path={"/profile"} component={ProfilePage} />

        <Route exact path={"/signup"} component={SignUpPage} />

        <Route>
          <div>Error: Pagina não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
