import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import Quina from "../components/Quina";

function Rotas(){
    return (
        <>
        <BrowserRouter>
        <Menu   />
        <Routes>
            <Route path="/" element={<Megasena/>}/>
            <Route path="/megasena" element={<Megasena/>}/>
            <Route path="/lotofacil" element={<Lotofacil/>}/>
            <Route path="/quina" element={<Quina/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Rotas;