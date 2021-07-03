import React from "react";
import WhoIam from "./WhoIam/WhoIam";
import ParticlesBg from "particles-bg";

const About = () => {
  return (
    <div>
      <WhoIam></WhoIam>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
};

export default About;
