import logo from "../assets/Logo/Logo.webp"
import "../Styles/Header.css"
function Header() {
    return (
        <header>
            <img className="Logo" src={logo} />

        </header>
    )
}

export default Header;