import '../Styles/AreaDoProfessor.css'
import ItensTabela from "./ItensTabela.jsx"


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

                        <th className="Nota">
                            2º Bimestre
                        </th>

                        <th className="Nota">
                            3º Bimestre
                        </th>

                        <th className="Nota">
                            4º Bimestre
                        </th>

                        <th className="Nota">
                            5º Conceito
                        </th>

                    </tr>

                </thead>

                <tbody>
                    <ItensTabela Nome="Rafael" Nota1="9.8" Nota2="9.8" Nota3="9.8" Nota4="9.8" Media />
                    <ItensTabela Nome="Vinicius" Nota1="9.8" Nota2="9.8" Nota3="9.8" Nota4="9.8" Media />
                    <ItensTabela Nome="Danilo" Nota1="9.8" Nota2="9.8" Nota3="9.8" Nota4="9.8" Media />
                    <ItensTabela Nome="Leonardo" Nota1="9.8" Nota2="9.8" Nota3="9.8" Nota4="9.8" Media />

                </tbody>

            </table>
            <div className="Botoes">
                <button className="Botao" onClick={Editar}> Editar </button>

                <button className="Botao" onClick={Salvar}> Salvar alterações </button>

            </div>

        </div>

    )
}