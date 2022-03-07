import React from "react";
import Beneficios from '../../imgs/beneficios.jpg'
import Banner from '../../imgs/banner.jpg'
import './home.css'


export default props => {
    return (
        <div>
            <img id="banner" src={Banner} />
            <div className="top">
                <h3> Sobre a barbearia Alura </h3>
                <p> Localizada no coração da cidade, a <strong> Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>
                <p id="missao"> <em>Nossa missão é: <strong> "Proporcionar auto-estima e qualidade de vida aos nossos clientes". </strong> </em> </p>
                <p> Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes</p>
            </div>

            <div className="lista">
                <h2> Beneficios </h2>

                <ul>
                    <li className="itens"> Atendimento aos Clientes</li>
                    <li className="itens"> Espaço diferenciado</li>
                    <li className="itens"> Localização</li>
                    <li className="itens"> Profissionais Qualificados</li>
                </ul>

                <img className="imgbenef" src={Beneficios} />
            </div>

        </div>
    )
}