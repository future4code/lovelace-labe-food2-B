import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

const Router = () => {
 return (
    <BrowserRouter>
     <Switch>
     <Router exct path={"/"}/>components={HomePage}
     <Router exct path={"/cart"}/>components={CardPage}
     <Router exct path={"/details"}/>components={DetailsRestaurantPage}
     <Router exct path={"/login"}/>components={LoginPage}
     <Router exct path={"/Profile"}/>components={ProfilePage}
     <Router exct path={"/search"}/>components={SearchPage}
     <Router exct path={"/singUpPage"}/>components={SingUpPage}
     <Router>
         <div>Error: Pagina não encontrada</div>
     </Router>
     </Switch>
    </BrowserRouter>
 )   
}

export default Router