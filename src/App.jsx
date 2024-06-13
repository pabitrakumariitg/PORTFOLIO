import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import MyProfile from "./components/MyProfile";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <MyProfile />
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;
