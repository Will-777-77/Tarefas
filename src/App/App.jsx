import './App.css';
import Sidebar from '../componentes/Sidebar/Sidebar';
import Header from '../componentes/Header/Header';

function App() {
  return (
    <section>
      <Header />
      <div className="div-conteudo-principal">
        <Sidebar />
        <main>
          <h1>Tarefas</h1>
        </main>
      </div>
    </section>
  );
}

export default App;

