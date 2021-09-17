import logo from "./perro.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Dogos Maiz</h1>

        <p>
          Conoce nuestros productos y servicios{" "}
          <a
            className="App-link"
            href="https://maizo21.github.io/veterinaria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            aqui
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
