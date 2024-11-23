import "../Styles/Footer.css"

import Logo from "../assets/Logo/Logo.webp"
import Vite from "../assets/Logo/vite.svg"
import React from "../assets/Logo/react.svg"

export default function Footer() {
    return (
        <footer>
            <img className="LogoFooter" src={Logo} />

            <p className="TituloRodape">
                Colégio Chase Atlantic ©2024 Todos os direitos reservados
            </p>

            <div className="Realizacao">
                <p>
                    Projeto feito usando o
                </p>

                <div className="Logos">
                    <img src={Vite} />

                    <p>
                        +
                    </p>

                    <img src={React} />

                </div>

            </div>

        </footer>
    )
}