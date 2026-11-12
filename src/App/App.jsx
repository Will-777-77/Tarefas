import './App.css';
import Sidebar from '../componentes/Sidebar/Sidebar';
import Header from '../componentes/Header/Header';
import Tarefas from '../componentes/Tarefas/Tarefas';


function App() {
  return (
    <section>
      <Header />
      <div className="div-conteudo-principal">
        <Sidebar />
        <main className='tarefas-principal'>
          <Tarefas/>
        </main>
      </div>
    </section>
  );
}

export default App;

