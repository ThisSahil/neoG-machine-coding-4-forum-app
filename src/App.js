import "./App.css";
import Landing from "./Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Singlepost from "./Post/Singlepost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post/:id" element={<Singlepost />} />
      </Routes>
    </div>
  );
}

export default App;
