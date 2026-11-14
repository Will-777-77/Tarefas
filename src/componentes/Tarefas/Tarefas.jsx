import TarefaForm from '../TarefaForm/TarefaForm';
import TarefaList from '../TarefaList/TarefaList';
import './Tarefas.css';
function Tarefas(){
    return (
        <div className='nome-tarefas-principal'>
            <TarefaForm/>
            <TarefaList/>
        </div>
    )
}
export default Tarefas