export default function ItensTabela({ Nome, Nota }) {
    return (
                <tr>
                    <td className="Nome">
                        {Nome}

                    </td>

                    <td className="Nota">
                        {Nota}

                    </td>
                </tr>

    )
}