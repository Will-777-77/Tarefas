import { Circle, Delete, Stars, X } from "lucide-react";
import "./TarefaList.css";
function TarefaList() {
  let listadeTarefas = [
    "Estudar mais tarde",
    "Estudo concluido",
    "Estudo em andamento",
  ];
  return (
    <ul className="lista-estudos">
      {listadeTarefas.map((listas) => {
        return (
          <li className="lista-tarefas">
            <section className="texto-tarefas">
              <Circle />
              <span>{listas}</span>
            </section>
            <section className="acoes-tarefas">
              <div>
                <Stars />
              </div>
              <div>
                <X />
              </div>
            </section>
          </li>
        );
      })}
    </ul>
  );
}
export default TarefaList;
