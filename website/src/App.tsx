import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section className="App">
                <div className="App-header">
                    <img src={reactLogo} className="App-logo" alt="logo" />
                    <img src={viteLogo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </p>
                    <p>
                        <button
                            className="App-link"
                            onClick={() => setCount((count) => count + 1)}
                        >
                            count is: {count}
                        </button>
                    </p>
                    <p>
                        <a
                            className="App-link"
                            href="https://vitejs.dev/guide/features.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vite Documentation
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}

export default App;
