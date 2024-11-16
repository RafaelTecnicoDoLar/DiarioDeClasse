import "../Styles/Login.css"
import { useState } from "react";

function Login() {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    function BotaoEnviar() {
        alert("Funfou")

    }
    return (
        <div className="Login">
            <div className="FraseBoasVindas">
                <h2>
                    Bem vindo ao diario de classe do Colégio Chase Atlantic

                </h2>

            </div>

                <form className="Formulario">
                    <h2 className="Text">
                        Login
                    </h2>

                    <input type="text" name="Digite seu Login" placeholder="Digite seu Login" value={usuario} onChange={(e) => setUsuario(e.target.value)} />

                    <h2 className="Text">
                        Senha
                    </h2>

                    <input type="password" name="Digite sua senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <div>
                        <button className="Botao" onClick={BotaoEnviar}> Enviar </button>

                        <a href="#"> Esqueci a senha</a>

                    </div>

                </form>

        </div>
    )
}

export default Login;