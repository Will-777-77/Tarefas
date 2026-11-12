import './TarefaList.css';
function TarefaList (){
    let listadeTarefas = ["Estudar mais tarde","Estudo concluido","Estudo em andamento"]
    return (
        <ul>
            {
                listadeTarefas.map ((listas)=>{
                    return <li>{listas}</li>
                })
            }
        </ul>                
    )
}
export default TarefaList