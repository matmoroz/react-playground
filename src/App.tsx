import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Moroz uczy Moroza!</p>
        <p>Test Paragrafu !</p>
        <p className="TestClass">
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count +1: {count}
          </button>
          <button
            type="button"
            onClick={() => setCount((count) => count * count)}
          >
            count ^2: {count}
          </button>
          <br />
          <button type="button" onClick={() => setCount((count) => count + -1)}>
            count - 1: {count}
          </button>
        </p>
        <span></span>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
