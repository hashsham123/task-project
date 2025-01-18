import { useState } from "react";
import "./styles/app.scss";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="task-app-box">
      <Home />
    </div>
  );
}

export default App;
