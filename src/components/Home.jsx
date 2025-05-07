import React, { useEffect } from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div className="name">Hello, I am Pabitra 😊</div>
        <div className="skills">
          <div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "I am a Frontend Developer",
                1000,
                "I am a Backend Developer",
                1000,
                "I am a Software Engineer",
                1000,
              ]}
              speed={10}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="connect">
          <button>Say hello</button>
          <button>My works</button>
        </div>
        <a
          href="https://drive.google.com/file/d/1hlJNdu1VJhAhl9BwPe63Jd_SVC0Ai1xG/view?usp=sharing"
          className="resume-link"
        >
          Click here to view my Resume
        </a>
      </div>
      <div className="right">
        <img src="1.jpg" alt="Pabitra" />
      </div>
    </div>
  );
};

export default Home;
