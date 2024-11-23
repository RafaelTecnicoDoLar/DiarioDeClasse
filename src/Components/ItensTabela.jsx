export default function ItensTabela({ nome, nota }) {

    return (
        <tr>
            <td className="Nome">
                {nome}

            </td>

            <td className="Nota">
                <input type="text" value={nota} />

            </td>

        </tr>

    )
}