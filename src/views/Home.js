import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FutureSplit from "../components/sections/FutureSplit";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import ClimateSplit from "../components/sections/ClimateSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

// <div style={{ backgroundColor: "#f7f7f7" }}>
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      />
      <FeaturesTiles className="illustration-section-01" />
      <FutureSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      />
      <ClimateSplit
        invertMobile
        // topDivider
        imageFill
        className="illustration-section-02"
      />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </div>
  );
};

export default Home;
