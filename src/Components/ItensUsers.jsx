export default function ItensUsuarios({ usuario, senha }) {

    return (
        <tr>
            <td className="Usuario">
                {usuario}

            </td>

            <td className="Senha">
                {senha}

            </td>

        </tr>

    )
}