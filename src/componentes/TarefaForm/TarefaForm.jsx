import { useState } from "react";
import "./TarefaForm.css"
function TarefaForm (){
    const [NomeTarefas, setNomeTarefas] = useState ('');
    function criarTarefaNoLocalStorage(){
        const tarefasAntigas = JSON.parse(localStorage.getItem("Tarefas:")) || []
        const tarefasAntigasComAsNovas = [...tarefasAntigas, NomeTarefas]
        const novasTarefasString = JSON.stringify (tarefasAntigasComAsNovas)

        localStorage.setItem("Tarefas:", novasTarefasString)
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