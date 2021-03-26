import React from "react";
import Hero from "../globals/Hero";
import homeBcg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryButton } from "../globals/Buttons";
const Header = () => {
  return (
    <div>
      <Hero img={homeBcg}>
        <Banner
          greeting="Welcome to"
          title=" beachwalk resort"
          text="Qui id culpa minim incididunt ad. Deserunt in exercitation ad fugiat ipsum officia duis adipisicing. Ullamco et in aliqua sit elit laboris veniam ullamco irure do. Esse voluptate labore nulla cupidatat tempor dolor reprehenderit. Aliquip incididunt dolore in nostrud ipsum qui veniam reprehenderit eiusmod duis. Fugiat est nostrud fugiat non nulla duis excepteur ipsum. Pariatur nisi nostrud ex fugiat est aute sint exercitation ullamco ad."
        >
          <PrimaryButton t="1rem">View Details</PrimaryButton>
        </Banner>
      </Hero>
    </div>
  );
};

export default Header;
