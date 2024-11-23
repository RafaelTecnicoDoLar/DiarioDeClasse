export default function ItensTabela({ Nome, Nota1, Nota2, Nota3, Nota4, Media}) {

    return (
        <tr>
            <td className="Nome">
                {Nome}

            </td>

            <td className="Nota">
                {Nota1}

            </td>

            <td className="Nota">
                {Nota2}

            </td>

            <td className="Nota">
                {Nota3}

            </td>

            <td className="Nota">
                {Nota4}

            </td>

            <td className="Nota">
                {Media = ((Nota1 + Nota2 + Nota3 + Nota4) / 4)}

            </td>

        </tr>

    )
}