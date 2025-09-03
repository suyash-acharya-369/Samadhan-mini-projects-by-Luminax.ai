import { useState } from "react";
import "./App.css"; // css import

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="container">
      {/* Counter */}
      <div className="card">
        <h2>Counter</h2>
        <p>Value: {count}</p>
        <div className="btn-group">
          <button onClick={() => setCount(count - 1)} className="btn red">-</button>
          <button onClick={() => setCount(count + 1)} className="btn green">+</button>
        </div>
      </div>

      {/* Live Text Preview */}
      <div className="card">
        <h2>Live Text Preview</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p><strong>Preview:</strong> {text || "Nothing typed yet!"}</p>
      </div>
    </div>
  );
}
