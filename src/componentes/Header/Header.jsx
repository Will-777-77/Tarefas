import { Check, CheckCircle } from "lucide-react";
import "./Header.css";

function Header() {
    return (
        <div>
            <h1 className="tarefas-app"> Tarefas App < CheckCircle size={25} color='black' /></h1>
        </div>

    );
}

export default Header;
