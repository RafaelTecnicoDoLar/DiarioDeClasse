import "../Styles/Header.css"

import logo from "../assets/Logo/Logo.webp"
import Instagram from "../assets/RedesSociais/Instagram.png"
import Twitter from "../assets/RedesSociais/Twitter.png"
import Youtube from "../assets/RedesSociais/Youtube.png"

function Header() {
    return (
        <header>
            <img className="Logo" src={logo} />

            <div>
                <img className="LogoRedes" src={Instagram} />
                <img className="LogoRedes" src={Twitter} />
                <img className="LogoRedes" src={Youtube} />

            </div>
        </header>
    )
}

export default Header;