import ItensUsuarios from "./ItensUsers"

export default function Usuarios(){
    return(
        <table>
            <thead>
                <th>
                    Usuario
                </th>

                <th>
                    Senha
                </th>

            </thead>

            <tbody>
                {db.users.map(usuario => <ItensUsuarios usuario={users.nome} senha={users.senha} key={users.nome}/>)}

            </tbody>
            
        </table>
    )
}