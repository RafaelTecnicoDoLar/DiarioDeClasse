import '../Styles/Header.css'
import Logo from '../assets/Logo/Logo.png'

import email from '../assets/Botao/email.png'
import idioma from '../assets/Botao/idioma.png'
import lupa from '../assets/Botao/lupa.png'

export default function Header() {
    return (
        <header>
            <a href="/"> <img className='Logo botaoAnimacao' src={Logo} /> </a>

            <div className='BoxLink'>
                <a className="LinkinPark botaoAnimacao" href="/"> Home </a>
                <a className="LinkinPark botaoAnimacao" href="/sobre"> Sobre nós </a>
                <a className="LinkinPark botaoAnimacao" href="/blog"> Blog </a>
                <a className="LinkinPark botaoAnimacao" href="/contato"> Contatos </a>
                <a className="LinkinPark botaoAnimacao" href="/Ri"> Relação com investidores </a>

            </div>

            <div className='BoxLink'>
                <a href="mailto:rjonasmombellifranco@gmail.com?subject=Olá&body=Escreva sua mensagem aqui" target="_blank" > <img className="botao botaoAnimacao" src={email} /> </a>
                <a href="/"> <img className="botao botaoAnimacao" src={idioma} /> </a>

            </div>

        </header>
    )
}