import HistoriaColegio from "../assets/Fotos/HistoriaColegio.webp"
import Pitagoras from "../assets/Fotos/Pitagoras.png"
import Cambridge from "../assets/Fotos/Cambridge.png"
import MeSalva from "../assets/Fotos/MeSalva.png"
import EscolaDaInteligencia from "../assets/Fotos/EscolaDaInteligencia.png"

import "../Styles/SaibaMais.css"

export default function SaibaMais() {
    return (
        <div className="SaibaMais">
            <p className="TituloHistoria">
                Como começamos?

            </p>

            <div className="saibaHistoria">
                <p className="Historia">
                    O Colégio Chase Atlantic foi fundado em 1943, em São Paulo, com uma missão clara: oferecer educação de excelência e qualidade para a população paulista. Em uma época marcada pelo esforço em proporcionar um ensino acessível e sólido, o colégio rapidamente se tornou referência no estado, destacando-se pela sua abordagem pedagógica e pelo compromisso com o desenvolvimento completo de seus alunos.

                    Com o avanço tecnológico e as transformações no cenário educacional, o Colégio Chase Atlantic continua evoluindo para garantir que seus alunos recebam uma formação competitiva e atualizada. Recentemente, o colégio incorporou os materiais didáticos da renomada rede Pitágoras e o currículo de Cambridge, reconhecidos mundialmente. Essas parcerias trouxeram ao colégio uma metodologia que combina tradição e inovação, enriquecendo o aprendizado desde o ensino fundamental até o ensino médio.

                    Atualmente, o Colégio Chase Atlantic é conhecido por sua preparação intensiva e abrangente, ajudando os alunos a desenvolver habilidades acadêmicas e pessoais fundamentais para o ingresso nas melhores universidades do país e do mundo.
                </p>

                <img className="FotoColegio" src={HistoriaColegio} />

            </div>

            <div>
                <p className="TituloHistoria">
                    Nossos matérias

                </p>

                <div className="Materias">
                    <a className="botaoAnimacao" href="https://www.redepitagoras.com.br/" target="_blank" >
                        <img className="MateriasDitaticos" src={Pitagoras} />
                    </a>

                    <a className="botaoAnimacao" href="https://www.cambridgeenglish.org/br/" target="_blank" >
                        <img className="MateriasDitaticos" src={Cambridge} />

                    </a>

                    <a className="botaoAnimacao" href="https://www.mesalva.com/" target="_blank" >
                        <img className="MateriasDitaticos" src={MeSalva} />

                    </a>

                    <a className="botaoAnimacao" href="https://escoladainteligencia.com.br/" target="_blank" >
                        <img className="MateriasDitaticos" src={EscolaDaInteligencia} />

                    </a>
                    
                </div>

            </div>

        </div >
    )
}