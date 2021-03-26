import styled from "styled-components";
import {
  setColor,
  setRem,
  setFont,
  setBorder,
  setLetterSpacing,
  setTransition,
} from "../../styles";

export const PrimaryButton = styled.button`
  display: inline-block;
  ${(props) => `background: ${props.theme.primaryColor}`};
  ${(props) => `color: ${props.theme.secondaryColor}`};
  text-transform: capitalize;
  font-size: ${setRem(18)};

  ${setFont.main};
  ${setTransition({ time: "2s" })};
  padding: ${setRem(17)} ${setRem(36)}  ${setRem()};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  &:hover {
    background: transparent;
    ${(props) => `background: ${props.theme.secondaryColor}`};
    ${(props) => `color: ${props.theme.primaryColor}`};
  }
  ${(props) =>
    `margin: ${props.t || 0}  ${props.b || 0}  ${props.r || 0}  ${
      props.l || 0
    }`};
  text-decoration: none;
  cursor: pointer;
`;

export const SmallBtn = styled(PrimaryButton)`
  padding: ${setRem(9)} ${setRem(12)};
`;
