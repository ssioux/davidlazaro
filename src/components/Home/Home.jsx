import About from "../About/About";
import Contact from "../Contact/Contact";
// import Exp from "../Experience/Exp";
import Portfolio from "../Portfolio/Portfolio";
import Who from "../Who/Who";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Who />
      <About />
      {/* <Exp /> */}
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
