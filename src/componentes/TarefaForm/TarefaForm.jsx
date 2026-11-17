import "./TarefaForm.css"
function TarefaForm (){
    return(
        <form className="tarefas-input-btn">
            <input  placeholder="Adicione Tarefas"/>
            <button className="botao-add-tarefas">Adicionar Tarefas</button>
        </form>
    )

}
export default TarefaForm;