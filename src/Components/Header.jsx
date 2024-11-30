import "../Styles/Header.css"
import "./Login.jsx"

import logo from "../assets/Logo/Logo.webp"
import Menu from "../assets/Botao/Menu.png"

import Instagram from "../assets/RedesSociais/Instagram.png"
import Twitter from "../assets/RedesSociais/Twitter.png"
import Youtube from "../assets/RedesSociais/Youtube.png"
import Facebook from "../assets/RedesSociais/Facebook.png"

function Header() {
    return (
        <header>

            <img className="Menu" src={Menu} />

            <img className="Logo" src={logo} />

            <div>
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

        </header>
    )
}

export default Header;