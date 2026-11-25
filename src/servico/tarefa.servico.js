export function pegarTarefas (){
    return JSON.parse(localStorage.getItem('Tarefas:')) || []
}
export function adicionarTarefa (){}