import React from "react";
import './header.css'
import logo from '../components/img/logo.png'

export default props =>{
    return(
        <header className="header">
            <img src={logo} />
            <h1 className="title"> Barbearia Alura</h1>
        </header>
    )
}