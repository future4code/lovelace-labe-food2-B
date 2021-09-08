import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import CartPage from "../pages/CartPage/CartPage"
import DetailsRestaurantPage from "../pages/DetailsRestaurantPage/DetailsRestaurantPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"



const Router = () => {
 return (
    <BrowserRouter>
     <Switch>
        <Route exct path={"/"} 
        component={HomePage}
        />

        <Route exct path={"/cart"} 
        component={CartPage}
        />

        <Route exct path={"/details"} 
        component={DetailsRestaurantPage}
         />

        <Route exct path={"/login"}
         component={LoginPage} 
         />

        <Route exct path={"/Profile"} 
        component={ProfilePage}
        />


        <Route exct path={"/signUpPage"} 
        component={SignUpPage}
        />
     
        <Route>
            <div>Error: Pagina não encontrada</div>
         </Route>
     </Switch>
    </BrowserRouter>
 )   
}

export default Router