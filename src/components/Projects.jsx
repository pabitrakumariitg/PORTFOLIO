import React from "react";
import Cards from "./Cards";
import "./Projects.css";
import { UserCard } from "react-ui-cards";
const Projects = () => {
  return (
    <div className="my-projects">
      <h2>My Projects</h2>
      <div className="allProjects">
        <UserCard
          float
          href="https://github.com/pabitrakumariitg/ZCODER"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          name="ZCODER"
          stats={[
            {
              name: "React | Node | MongoDB | Express",
            },
          ]}
        />
        <UserCard
          float
          href="https://github.com/pabitrakumariitg/WordMaze."
          header="https://i.imgur.com/w5tX1Pn.jpg"
          
          name="WORDMAZE"
          stats={[
            {
              name: "React",
            },
          ]}
        />
        <UserCard
          float
          href="https://github.com/pabitrakumariitg/CAMPUS-OLX"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          name="CAMPUS-OLX"
          stats={[
            {
              name: "React | Node | MongoDB | Express",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
