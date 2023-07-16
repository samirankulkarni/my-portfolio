import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Cp from "./components/Cp";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Cp></Cp>
      <Contact></Contact>
    </div>
  );
}

export default App;
