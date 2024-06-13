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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                explicabo iure quod doloremque deserunt suscipit iusto, nostrum
                omnis blanditiis sit.
              </h5>
            </div>
          </div>
          <div className="frontend-developer about-items">
            <StorageIcon />
            <div className="description">
              <h3>Backend Developer</h3>
              <h5>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                explicabo iure quod doloremque deserunt suscipit iusto, nostrum
                omnis blanditiis sit.
              </h5>
            </div>
          </div>
          <div className="frontend-developer about-items">
            <TerminalIcon />
            <div className="description">
              <h3>Software Engineer</h3>
              <h5>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                explicabo iure quod doloremque deserunt suscipit iusto, nostrum
                omnis blanditiis sit.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
