import React from "react";
import styled from "styled-components";
import { setFont, setLetterSpacing, setRem } from "../../styles";

const Title = ({ className, title, center }) => {
  return <h6 className={className}>{title}</h6>;
};

export default styled(Title)`
  ${(props) => `color: ${props.theme.secondaryColor}`};
  font-size: ${setRem(30)};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  ${setFont.main};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

// export default styled(Title)`
//   font-size: ${setRem(36)};
//   text-transform: capitalize;
//   ${setLetterSpacing(5)};
//   ${setFont.slanted};
//   text-align: ${(props) => (props.center ? "center" : "left")};
// `;
