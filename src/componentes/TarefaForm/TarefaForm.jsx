import { useState } from "react";
import "./TarefaForm.css"
function TarefaForm (){
    const [NomeTarefas, setNomeTarefas] = useState ('');
    function criarTarefaNoLocalStorage(){
        localStorage.setItem("Tarefas:", NomeTarefas)
    }
    return(
        <form onSubmit={criarTarefaNoLocalStorage} className="tarefas-input-btn">
            <input onChange={
                (evento) => {setNomeTarefas(evento.target.value)}
            } placeholder="Ex: Adicione Tarefas"/> 
            <button className="botao-add-tarefas">Adicionar Tarefas</button>
        </form>
    )

}
export default TarefaForm;