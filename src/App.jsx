// import { HashRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copetances from "./components/Copetances";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white w-full md:px-2">
        <Home />
        <About />
        <Skills />
        <Services />
        <Copetances />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
