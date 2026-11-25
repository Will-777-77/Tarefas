import './App.css';
import Sidebar from '../componentes/Sidebar/Sidebar';
import Header from '../componentes/Header/Header';
import Tarefas from '../componentes/Tarefas/Tarefas';

function App() {
  
  return (
    <>
      <Header />
      <div className="div-conteudo-principal">
        <Sidebar />
        <main className='tarefas-principal'>
        <Tarefas/>
        </main>
      </div>
    </>
  );
}

export default App;

