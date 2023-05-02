import { Link } from "react-router-dom";
import "./Menu.css";

function Menu (){
    return (
        <>
        <Link to={"/megasena"} className="link M">Megasena</Link>
        <Link to={"/lotofacil"} className="link L">Lotofácil</Link>
        <Link to={"/quina"} className="link Q">Quina</Link>
        </>
    )
}
export default Menu;