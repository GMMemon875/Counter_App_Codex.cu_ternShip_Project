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
          {/* use state men save keya he gaya count men 0  */}
          <h1>{count}</h1>

          {/* on click per usstate wala counter increment button per count + 1 ho jaie  */}
          <button onClick={() => setCount(count + 1)}>Increment</button>
          {/* on click per usstate wala counter Dicrements button per count - 1 ho jaie  */}
          <button onClick={() => setCount(count - 1)}>Dicrement</button>
          {/* Reset button per onclick per == "" empty call ho jo be number incress hoie hen wo 0 ho jaie  */}
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
