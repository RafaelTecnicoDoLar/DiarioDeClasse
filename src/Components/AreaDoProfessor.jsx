import '../Styles/AreaDoProfessor.css'
import ItensTabela from "./ItensTabela.jsx"

export default function AreaDoProfessor() {
    return (
        <table className="Tabela">
            <thead>
                <tr>
                    <th className="Nome">
                        Nome
                    </th>

                    <th className="Nota">
                        Nota
                    </th>

                </tr>

            </thead>

            <tbody>
                <ItensTabela Nome="Rafael" Nota1="9.8" Nota2="9.8" Nota3="9.8" Nota4="9.8"/>
                <ItensTabela Nome="Vinicius" Nota="9.8" />
                <ItensTabela Nome="Danilo" Nota="7.9" />
                <ItensTabela Nome="Leonardo" Nota="7.8" />

            </tbody>


        </table>
    )
}