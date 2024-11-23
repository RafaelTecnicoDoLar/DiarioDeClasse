import "../Styles/Header.css"
import "./Login.jsx"

import logo from "../assets/Logo/Logo.webp"
import Instagram from "../assets/RedesSociais/Instagram.png"
import Twitter from "../assets/RedesSociais/Twitter.png"
import Youtube from "../assets/RedesSociais/Youtube.png"
import Menu from "../assets/Botao/menu.png"
import Sair from "../assets/Botao/sair.png"

function Header() {
    return (
        <header>

            <img className="Menu" src={Menu} />

            <img className="Logo" src={logo} />

            <div>
                <img className="LogoRedes" src={Instagram} />
                <img className="LogoRedes" src={Twitter} />
                <img className="LogoRedes" src={Youtube} />

            </div>

            <img className="Sair" src={Sair} />
        </header>
    )
}

export default Header;