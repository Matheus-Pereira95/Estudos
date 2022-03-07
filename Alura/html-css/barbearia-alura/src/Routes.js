import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

export default props => {

    return (
        <Switch >
            <Route exact path='/' >
                < Home />
            </Route>

            <Route exact path='/about'>
                <About/>
            </Route>

        </Switch>

    )
}