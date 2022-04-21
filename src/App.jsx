import { useContext } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/works/Works";
import { ThemeContext } from "./Context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
