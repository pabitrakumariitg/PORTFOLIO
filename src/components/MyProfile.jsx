import React from "react";
import "./MyProfile.css";
import { UserCard } from "react-ui-cards";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <h1>MyProfile</h1>
      <div className="myProfile-cards">
        <UserCard
          float
          href="https://leetcode.com/u/pabitrakumarIITG/"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          avatar="leetcode.png"
          name="Leetcode"
          positionName="C++"
          stats={[
            {
              name: "Questions",
              value: 350,
            },
          ]}
        />
        <UserCard
          float
          href="https://www.geeksforgeeks.org/user/pabitrakubu70/"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          avatar="gfg.png"
          name="Geeks For Geeks"
          positionName="C++"
          stats={[
            {
              name: "Questions",
              value: 58,
            },
          ]}
        />
        <UserCard
          float
          href="https://www.codechef.com/users/pabitraiitg"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          avatar="codechef.jpg"
          name="Codechef"
          positionName="C++"
          stats={[
            {
              name: "Questions",
              value: 76,
            },
            {
              name: "Max Rating",
              value: 1415,
            },
          ]}
        />
        <UserCard
          float
          href="https://codeforces.com/profile/pabitrakumar50abc"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          avatar="codeforces.jpg"
          name="Codeforces"
          positionName="C++"
          stats={[
            {
              name: "Questions",
              value: 130,
            },
            {
              name: "Max Rating",
              value: 1200,
            },
          ]}
        />
        <UserCard
          float
          href="https://www.naukri.com/code360/profile/pabitrakumar"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          avatar="codestudio.jpeg"
          name="CodeStudio"
          positionName="C++"
          stats={[
            {
              name: "Questions",
              value: 130,
            },
          ]}
        />
        <UserCard
          float
          href="https://github.com/pabitrakumariitg"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          avatar="github.png"
          name="Github"
          positionName="MERN | C++ "
          stats={[
            {
              name: "Projects",
              value: 5,
            },
          ]}
        />
        <UserCard
          float
          href="https://github.com/pabitrakumariitg"
          header="https://i.imgur.com/w5tX1Pn.jpg"
          avatar="linkedin.png"
          name="LinkedIn"
       
        />
      </div>
    </div>
  );
};

export default MyProfile;
