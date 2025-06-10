import React from "react";
import "./App.css";
import ProfileCard from "./components/profilecard/ProfileCard";
import mua7 from "./assets/images/mua7.jpg";

function App() {

  return (
    <>
      <ProfileCard 
      pics={<img src={mua7} alt="pics" />} 
      name="Udo Agonsi"
      bio="She is a software developer with a background in Business Development, presently training on how to use the react framework to solve problems." />
    </>
  );
}

export default App;
