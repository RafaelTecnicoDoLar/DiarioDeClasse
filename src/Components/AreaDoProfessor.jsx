import '../Styles/AreaDoProfessor.css'
import ItensTabela from "./ItensTabela.jsx"
import db from "../assets/BancoDeDados/db.json"
import Login from "./Login.jsx"
import Sair from "../assets/Botao/sair.png"

export default function AreaDoProfessor() {

    function Editar() {
        alert("Você quer editar?")
    }

    function Salvar() {
        alert("Você quer gravar as alterações?");

    }

    function logout() {
        localStorage.clear();
        window.location.reload();
        
    }

    return (
        <div className="tabela">
            <h1 className="Titulo">
                Diario de classe digital
            </h1>

            <div className="Container_cabecalho">
                <h2 className="SubTitulo">
                    Turma: Desenvolvimento WEB Integral Professor orientador: Giovanni Rodrigues

                </h2>

                <button className="Sair botaoAnimacao" onClick={logout} > Sair 
                <img className="ImgSair" src={Sair} />

                </button>

            </div>

            <table className="Tabela">
                <thead>
                    <tr>
                        <th className="Nome">
                            Nome
                        </th>

                        <th className="Nota">
                            1º Bimestre
                        </th>

                    </tr>

                </thead>

                <tbody>
                    {db.alunos.map(aluno => <ItensTabela nome={aluno.nome} nota={aluno.nota} key={aluno.nome} />)}

                </tbody>

            </table>

            <div className="Botoes">
                <button className="Botao" onClick={Editar}> Editar </button>

                <button className="Botao" onClick={Salvar}> Salvar alterações </button>

            </div>

        </div>

    )
}