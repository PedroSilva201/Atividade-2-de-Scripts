import { useContexto } from "../../hooks";
import trevoquina from "../../assets/trevo-quina.png";
import "./index.css";

function Quina() {
    const { quina } = useContexto();
    function Ganhadores() {
        if (quina.quantidadeGanhadores === 0) {
            return "ACUMULOU!"
        } if (quina.quantidadeGanhadores === 1) {
            return `${quina.quantidadeGanhadores} GANHADOR`
        } else {
            return `${quina.quantidadeGanhadores} GANHADORES`
        }
    }
    return (
        <>
            <div style={{ display: "flex", padding:"2px", margin:"15px" }}>
                <div className="bloco2">
                    <div className="jogoQ"><img src={trevoquina}></img> QUINA</div>
                    <div className="palavraQ">Estimativa de prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}:</div>
                    <div className="premioQ">{quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                </div>
                <div>
                    <section className="container flex">
                        <div className="modeloQ">{quina.dezenas ? quina.dezenas.map((el) => {
                            return <div className="testeQ">{el}</div>
                        }) : ""}</div></section>
                    <div className="ganhouQ">{Ganhadores()}</div>
                    <div className="concursoQ">Concurso {quina.numeroDoConcurso} {quina.dataPorExtenso}</div>
                </div>
            </div>
        </>
    );
}
export default Quina;