import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Workshops from "./pages/Workshops";
import ProjectExpo from "./pages/ProjectExpo";
import Quiz from "./pages/Quiz";
import Hackathon from "./pages/Hackathon";
import Hero from "./pages/hackatontimerpage";
import GradingPage from "./pages/GradingPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    window.gtag('config', 'G-4NMJL1CYS7', {
      page_path: location.pathname,
    });
  }, [location]);

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
        <Route path="/Hackathon" element={<Hackathon />} />
        <Route path="/GradingPage" element={<GradingPage />} />
        <Route path="/timer" element={<Hero />} />
      </Routes>
    </main>
  );
}

export default App;
