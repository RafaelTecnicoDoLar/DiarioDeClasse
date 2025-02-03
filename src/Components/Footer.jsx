import "../Styles/Footer.css"

import Logo from "../assets/Logo/Logo.webp"
import Vite from "../assets/Logo/vite.svg"
import React from "../assets/Logo/react.svg"

import Instagram from "../assets/RedesSociais/Instagram.png"
import Twitter from "../assets/RedesSociais/Twitter.png"
import Youtube from "../assets/RedesSociais/Youtube.png"
import Facebook from "../assets/RedesSociais/Facebook.png"

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
                    <a className="botaoAnimacao" href="https://vite.dev/" target="_blank" >
                        <img src={Vite} />

                    </a>

                    <p>
                        +
                    </p>

                    <a className="botaoAnimacao" href="https://react.dev/" target="blank">
                        <img src={React} />

                    </a>

                </div>

            </div>

            <div className="Realizacao">
                <p>
                    Redes sociais da banda que inspirou a criação desse projeto
                </p>

                <div className="Logos">
                    <a className="botaoAnimacao" href="https://www.instagram.com/chaseatlantic/" target="_blank" >
                        <img className="LogoRedes" src={Instagram} />

                    </a>

                    <a className="botaoAnimacao" href="https://x.com/ChaseAtlantic" target="_blank" >
                        <img className="LogoRedes" src={Twitter} />

                    </a>

                    <a className="botaoAnimacao" href="https://www.youtube.com/channel/UCpvCJWgUNwZArGtJ00kDS1A" target="_blank" >
                        <img className="LogoRedes" src={Youtube} />

                    </a>

                    <a className="botaoAnimacao" href="https://www.facebook.com/ChaseAtlantic/" target="_blank" >
                        <img className="LogoRedes" src={Facebook} />

                    </a>

                </div>

            </div>

        </footer>
    )
}