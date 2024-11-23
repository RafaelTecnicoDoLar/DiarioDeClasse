import '../Styles/AreaDoProfessor.css'
import ItensTabela from "./ItensTabela.jsx"
import db from "../assets/BancoDeDados/db.json"

export default function AreaDoProfessor() {

    function Editar() {
        alert("Você quer editar?")
    }

    function Salvar() {
        alert("Você quer gravar as alterações?");

    }

    return (
        <div className="tabela">

            <h1 className="Titulo">
                Diario de classe digital
            </h1>

            <h2 className="SubTitulo">
                Turma: 3ºA Vespertino   Professor orientador: Giovanni Rodrigues

            </h2>

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
                    {db.alunos.map(aluno => <ItensTabela nome={aluno.nome} nota={aluno.nota} key={aluno.nome}/>)}

                </tbody>

            </table>

            <div className="Botoes">
                <button className="Botao" onClick={Editar}> Editar </button>

                <button className="Botao" onClick={Salvar}> Salvar alterações </button>

            </div>

        </div>

    )
}