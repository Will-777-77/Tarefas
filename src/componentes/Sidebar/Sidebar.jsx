import "./Sidebar.css";

function Sidebar() {
    return (
        <nav className="conteudoBotao">
            <button className="botao-principal">Todas</button>
            <button className="botao-principal">Completas</button>
            <button className="botao-principal">Favoritas</button>
        </nav>
    );
}

export default Sidebar;
