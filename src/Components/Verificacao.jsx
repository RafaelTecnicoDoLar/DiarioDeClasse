import { useState } from "react";
import Login from "./Login.jsx";
import AreaDoProfessor from "./AreaDoProfessor.jsx"

function Verificacao() {

    const [entrar, useEntrar] = useState();

    return (
        <div>

            <Login />
            <AreaDoProfessor />
        </div>

    )
}

export default Verificacao;