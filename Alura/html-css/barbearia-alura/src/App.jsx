import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header";
import Routes from "./Routes";
import Footer from "./components/Footer";


export default props => {
    return (
        <BrowserRouter>
            <div className="structure">
                <Header />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}