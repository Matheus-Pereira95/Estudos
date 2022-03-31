import React from "react";
import './services.css';
import Cabelo from '../../imgs/cabelo.jpg'
import Barba from '../../imgs/barba.jpg'
import CabeloEBarba from '../../imgs/cabelo+barba.jpg'

export default props => {
    return (
        <main>
            <ul className="products">
                <li>
                    <h2> Cabelo </h2>
                    <img src={ Cabelo } />
                    <p> Na tesoura ou máquina</p>
                    <p className="price"> R$ 25</p>
                </li>
                <li>
                    <h2> Barba </h2>
                    <img src={ Barba } />
                    <p> Corte e desenho profissional </p>
                    <p className="price"> R$ 18</p>
                </li>
                <li>
                    <h2> Cabelo + Barba </h2>
                    <img src={ CabeloEBarba } />
                    <p> Pacote completo de cabelo e barba</p>
                    <p className="price"> R$ 35</p>
                </li>
            </ul>

        </main>

    )
}