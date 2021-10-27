import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
  
      <div className="App">
        <h3 className="text-center"> Otis dictionary app</h3>
        <Dictionary defaultKeyword="wine" />
        <footer>
          <h6 className="text-center">
            This project was coded by{" "}
            <a
              href="https://chiamakaugoji.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Chiamaka Ugoji{" "}
            </a>
            and is{" "}
            <a
              href="https://github.com/Chiamaka007/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open sourced
            </a>
          </h6>
        </footer>
      </div>
  
  );
}

export default App;
