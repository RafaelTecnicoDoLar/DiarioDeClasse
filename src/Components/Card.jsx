import "../Styles/Card.css"

export default function Card({ Imagem, Titulo, SubTitulo, Link }) {
    return (
        <div className="Card">
            <img className="img" src={Imagem} />

            <h1 className="Titulo"> {Titulo} </h1>

            <p className="Subtitulo"> {SubTitulo} </p>

            <a className="Botao botaoAnimacao" href={Link} target="_blank"> Comprar </a>

        </div>
    )
}