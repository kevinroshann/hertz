// import About from "./components/About";
// import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Workshops from "./pages/Workshops";
import ProjectExpo from "./pages/ProjectExpo";
import Quiz from "./pages/Quiz";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/Events" element={<Events />} />
        <Route path="/Workshops" element={<Workshops />} />
        <Route path="/ProjectExpo" element={<ProjectExpo />} />
        <Route path="/Quiz" element={<Quiz />} /> {/* New Route */}
      </Routes>
    </main>
  );
}

export default App;
