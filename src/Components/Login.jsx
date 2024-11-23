import "../Styles/Login.css"
import { useState } from "react";
import AreaDoProfessor from "./AreaDoProfessor"
import Usuarios from "./Usuarios"

function Login() {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const [logado, useLogado] = useState(false);
    const [autorizado, useAutorizado] = useState(false);
    const [alerta, useAlerta] = useState();

    function BotaoEnviar(e) {
        e.preventDefault()
        if (usuario == "Rafael" && senha == 12345678) {
            useLogado(true);

        } else if (usuario == "Giovanni" && senha == 87654321) {
            useAutorizado(true);

        } else {
            useAlerta("Acesso negado, confira o usuario e a senha e tente novamente");

        }

    }

    return (
        <div>

            {logado ?
                <AreaDoProfessor />

                : autorizado ?
                
                    <Usuarios />

                    :

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

                            <input className="Input" type="text" name="Digite seu Login" placeholder="Digite seu Login" value={usuario} onChange={(e) => setUsuario(e.target.value)} />

                            <h2 className="Text">
                                Senha
                            </h2>

                            <input className="Input" type="password" name="Digite sua senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

                            <p className="Alerta">
                                {alerta}
                            </p>

                            <div>
                                <button className="Botao" onClick={BotaoEnviar}> Enviar </button>

                                <a href="#"> Esqueci a senha</a>

                            </div>

                        </form>

                    </div>

            }

        </div>

    )
}

export default Login;