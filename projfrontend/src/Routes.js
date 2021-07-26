import React from 'react'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./core/Home";
import Signup from "./user/Signup"
import Signin from "./user/Signin"
function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/signup" exact component={Signup}></Route>
                    <Route path="/signin" exact component={Signin}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
