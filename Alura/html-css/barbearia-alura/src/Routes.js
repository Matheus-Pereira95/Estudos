import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";

export default props => {

    return (
        <Switch >
            <Route exact path='/' >
                < Home />
            </Route>

            <Route exact path='/services'>
                <Services/>
            </Route>

            <Route exact path='/contact'>
                <Contact/>
            </Route>

            <Route exact path='/about'>
                <About/>
            </Route>

        </Switch>

    )
}