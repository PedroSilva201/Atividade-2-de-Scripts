import { useContexto } from "../hooks";
import "./Principal.css"; 
import Rotas from "../routes";


function Principal(){
    const {megasena, lotofacil, quina} = useContexto();
    return (
        <>
        {megasena.numeroDoConcurso?<div><Rotas/></div>: <div className="carregar"><h1>Carregando...</h1></div>}
        </>
    );
}
export default Principal;