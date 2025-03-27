import React from "react";
import Header from "../components/Header";

import Description from "../components/Description";
import Testimonial from "../components/Testimonial";
import Generate from "../components/Generate";
import Steps from "../components/Steps";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonial />
      <Generate />
    </div>
  );
};

export default Home;
