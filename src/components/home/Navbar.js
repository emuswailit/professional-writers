import React from "react";
import styled from "styled-components";
import { mediaMax, setFlex, setRem } from "../../styles";
import Title from "../globals/NavbarTitle";

const Navbar = ({ children }) => {
  return (
    <NavbarWrapper>
      <Title className="title" title="Professional Writers" center />
      {children}
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  background: ${(props) => props.theme.primaryColor};
  ${(props) => `color: ${props.theme.secondaryColor}`};
  ${setFlex({ x: "space-between", y: "center" })};

  padding: ${setRem(16)};
  ${mediaMax.phone`
  .title{
     font-size:  ${setRem(12)};
     padding: ${setRem(12)};
  }
  `}
`;
export default Navbar;
