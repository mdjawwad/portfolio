import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import Services from "./Components/services/Services";
import Experience from "./Components/experience/Experience";
import "./App.css";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testtimonials/Testimonial";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

import {themeContext} from './Context';
import {useContext} from 'react';
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{
      background :darkMode ? 'var(--dark)' : '',
      color: darkMode ? 'white' : ''
    }}>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
