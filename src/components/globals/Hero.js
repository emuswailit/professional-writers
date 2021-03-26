import styled from "styled-components";

import { setFlex, setBackground } from "../../styles";
const Hero = styled.header`
  min-height: 100vh;
  ${setFlex()};
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,0.5)" })};
`;

export default Hero;
