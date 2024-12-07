import Header from './Header'
import Footer from './Footer'
import "../Styles/Produtos.css"
import Card from "./Card.jsx"

import PaperKraft from "../assets/Produto/PaperKraft.png"
import CaixaPapelao from "../assets/Produto/CaixaPapelao.png"
import Sulfite from "../assets/Produto/Sufite.png"
import Etiqueta from "../assets/Produto/Etiqueta.png"

export default function Home() {
    return (
        <div>
            <Header />
            <div className='Produtos' id='PapelReciclado'>
                <h1 className='Titulo'>
                    Conheça nossos Produtos
                </h1>

                <div className='Carrossel'>
                    <Card Imagem={PaperKraft} Titulo={"Paper Kraft"} SubTitulo={"Ideal para embalagens ecológicas e resistentes."} link={""}/>
                    <Card Imagem={CaixaPapelao} Titulo={"Caixas"} SubTitulo={"Embalagens feitas sob medida para atender às necessidades do seu negócio."} link={""}/>
                    <Card Imagem={Sulfite} Titulo={"Papéis sulfite"} SubTitulo={"Papéis reciclados de alta qualidade para impressão e uso diário."} link={""}/>
                    <Card Imagem={Etiqueta} Titulo={"Paper Kraft"} SubTitulo={"Perfeitos para branding e rotulagem sustentável."} link={""}/>
                </div>

            </div>

            <Footer />
        </div>
    )
}

