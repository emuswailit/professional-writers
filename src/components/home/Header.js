import React from "react";
import Hero from "../globals/Hero";
import homeBcg from "../../images/proposal.jpg";
import Banner from "../globals/Banner";
import { PrimaryButton } from "../globals/Buttons";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {

  let history = useHistory()
  const handleRedirect=(props)=>{
    history.push("/job")

  
    // console.log("Redirect", props)
  }
  return (
    <div>
      <Hero img={homeBcg}>
        <Banner
          greeting="Welcome to"
          title=" professional writers"
          text="At Proffesional Writers, we value you and your writing job and thus give it a dedicated attention. Our virtual team top subject matter experts, reserchers, writers will offer you much required virtual support to ensure tmely delivery of your writing job"
        >
          <PrimaryButton t="1rem" onClick={handleRedirect}>
            
            Submit your job now!
          
          </PrimaryButton>
        </Banner>
      </Hero>
    </div>
  );
};

export default Header;
