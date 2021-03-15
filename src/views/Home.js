import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <Hero />
      <FeaturesTiles className="illustration-section-01" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      {/* <Cta split /> */}
    </div>
  );
};

export default Home;
