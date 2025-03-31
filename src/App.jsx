// import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copetances from "./components/Copetances";

function App() {
  return (
    <div className="bg-gray-900 text-white w-full">
      {/* <Navbar /> */}
      <Home />
      <Skills />
      {/* <About />
      
      */}
      <Services />
      <Copetances />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
