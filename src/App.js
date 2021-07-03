import Home from "./components/Home/Home";
import ParticlesBg from "particles-bg";

import "./app.css";
import About from "./components/About/About";
import MySkill from "./components/MySkill/MySkill";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Service/Services";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Home></Home>
      <ParticlesBg type="lines" bg={true} />
      <About></About>
      <MySkill></MySkill>
      <Portfolio></Portfolio>
      <Services></Services>
      <Contact></Contact>
      <p className="text-center mt-5 fs-5">
        All Rights © Reserved by Hasanur rahman himel
      </p>
    </>
  );
}

export default App;
