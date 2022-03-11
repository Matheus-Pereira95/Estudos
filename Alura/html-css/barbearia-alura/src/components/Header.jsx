import React from "react";
import './header.css'
import Logo from '../imgs/logo.png'
import {Link} from 'react-router-dom'

export default props => {
    return (
        <header className="header">
            <img src={ Logo } />
            <h1> Barbearia Alura </h1>

            <ul className="lista-header">
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/services"> Serviços </Link></li>
                <li> <Link to="contact"> Contato  </Link></li>
                
            </ul>



        </header>

    )

}