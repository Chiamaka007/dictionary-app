import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
       <h3 className="text-center">DICTIONARY APP</h3>
      <Dictionary />
      <footer>
        <h6 className="text-center">
          This project was coded by{" "}
          <a href="https://github.com/Chiamaka007/dictionary-app">
            Chiamaka Ugoji
          </a>
        </h6>
      </footer>
    </div>
  );
}

export default App;
