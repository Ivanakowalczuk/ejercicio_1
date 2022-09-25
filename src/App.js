import logo from './logo.svg';
import './App.css';
import ListaContactos from './components/container/listaContactos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListaContactos></ListaContactos>
        
      </header>
    </div>
  );
}

export default App;
