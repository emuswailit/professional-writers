import React from "react";
import styled from "styled-components";
import { Section } from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import { PrimaryButton } from "../globals/Buttons";
import {
  setBorder,
  setColor,
  setLetterSpacing,
  setRem,
  media,
} from "../../styles";
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>

        <div className="about-info">
          <Title title="about us"></Title>

          <p>
            Aliquip enim nulla sit ea adipisicing velit cupidatat velit
            excepteur consectetur ipsum ut elit. Mollit adipisicing qui labore
            est aliquip mollit ex adipisicing sunt ad non ad mollit elit. Ut
            laborum minim Lorem enim commodo tempor sint. Commodo commodo minim
            irure qui. Exercitation esse magna pariatur anim officia commodo
            adipisicing cupidatat incididunt ut anim cupidatat minim velit.
          </p>

          <PrimaryButton>Read more</PrimaryButton>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)}
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.large`
  width:100vw;
  max-width: 1170px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${setRem(32)};
  .about-img, .about-info{
      align-self:center
  }

  .about-info{
      width: 80%
  }

  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  `}
`;
export default About;
