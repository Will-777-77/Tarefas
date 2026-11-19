import "./Sidebar.css";
import {SquareCheck, Check, Star } from "lucide-react";

function Sidebar() {
    return (
        <nav className="conteudoBotao">
            <button className="botao-principal">
                <section>
                    <SquareCheck size={20}/> Todas
                </section> 
                 
            </button>
            <button className="botao-principal">
                <section>
                    <Check size= {20}/>Completas
                </section>     
            </button>
            <button className="botao-principal">
                <section>
                    <Star size={20}/> Favoritas
                </section> 
            </button>
        </nav>
    );
}

export default Sidebar;
