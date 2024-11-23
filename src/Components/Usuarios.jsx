import '../Styles/Usuarios.css'
import ItensUsers from "./ItensUsers"
import db from "../assets/BancoDeDados/db.json"

console.log(db)

export default function Usuarios() {
    return (
        <div className="tabela">

            <h1 className="Titulo">
                Diario de classe digital
            </h1>

            <table className="Tabela">
                <thead>
                    <tr>
                        <th className="Usuario">
                            Usuario
                        </th>

                        <th className="Senha">
                            Senha
                        </th>

                    </tr>

                </thead>

                <tbody>
                    {db.users.map(user => <ItensUsers usuario={user.nome} senha={user.senha} key={user.nome} />)}

                </tbody>

            </table>

        </div>

    )
}