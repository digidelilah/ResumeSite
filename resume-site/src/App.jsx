import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./About.jsx";

function Home() {
  //consts
  const navigate = useNavigate();

  return (
    <div className="nameBox">
      <h1 className="nameplate">Brynn Landry</h1>
      <div className="buttonBox">
        <button onClick={() => navigate("/about")} className="homeBtn">
          About Me
        </button>

        <button className="homeBtn">Projects</button>

        <button className="homeBtn">Experience</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
