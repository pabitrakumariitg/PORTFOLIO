import React from "react";
import "./About.css";
import LaptopIcon from "@mui/icons-material/Laptop";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";

const About = () => {
  return (
    <div className="About">
      <div className="heading">ABOUT ME</div>
      <div className="container">
        <div className="about-image">
          <img src="about.jpg" alt="About" />
        </div>
        <div className="container-right">
          <div className="frontend-developer about-items">
            <LaptopIcon />
            <div className="description">
              <h3>Frontend Developer</h3>
              <h5>
                I build responsive and dynamic user interfaces using React.js, JavaScript, and CSS. 
                I focus on crafting intuitive experiences with attention to performance, accessibility, and design aesthetics.
              </h5>
            </div>
          </div>
          <div className="frontend-developer about-items">
            <StorageIcon />
            <div className="description">
              <h3>Backend Developer</h3>
              <h5>
                I develop robust server-side applications using Node.js, Express.js, and MongoDB. 
                I design RESTful APIs and manage databases to ensure seamless communication between client and server.
              </h5>
            </div>
          </div>
          <div className="frontend-developer about-items">
            <TerminalIcon />
            <div className="description">
              <h3>Software Engineer</h3>
              <h5>
                With a strong foundation in data structures, algorithms, and system design, 
                I solve real-world problems through efficient and scalable software solutions across the full stack.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
