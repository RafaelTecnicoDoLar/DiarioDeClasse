import "../Styles/Login.css";
import { useState } from "react";
import axios from "axios";
import AreaDoProfessor from "./AreaDoProfessor";
import SaibaMais from "./SaibaMais";

function Login() {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const [logado, useLogado] = useState(false);
    const [alerta, useAlerta] = useState();

    function BotaoEnviar(e) {
        e.preventDefault()

        axios.post("https://base.carbonpass.com.br/geoblue/auth/login", {
            email: usuario,
            password: senha

        }).then(function(response) {
            console.log(response)
            useLogado(true);

        }).catch(function (error){
            console.log(error);
            useAlerta("Acesso negado, confira o usuario e a senha e tente novamente");

        })

    }

    return (
        <div>

            {logado ?
                <AreaDoProfessor />

                : 
                    <div>
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

                                <div className="botoes">
                                    <button className="Botao botaoAnimacao" onClick={BotaoEnviar}> Enviar </button>

                                    <a className="esqueciASenha botaoAnimacao" href="#">  Esqueci a senha</a>

                                </div>

                            </form>

                        </div>
                        <SaibaMais />

                    </div>

            }

        </div>

    )
}

export default Login;