import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className=" card">
          <h1 className="Apptext">Counter app</h1>
          {/* <p>Current Count</p> */}
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Dicrement</button>
          <button className="btnReset" onClick={() => setCount(count == "")}>
            {" "}
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
