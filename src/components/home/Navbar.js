import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaMax, setFlex, setRem } from "../../styles";
import Title from "../globals/NavbarTitle";
import { FaMagento } from "react-icons/fa";

const Navbar = ({ children }) => {

    const goBackHome = () => {
      console.log("Clicked");
    };
  return (
    <NavbarWrapper>
      <NavLogo to="/">
        <NavIcon />
        <Title
          className="title"
          onClick={goBackHome}
          title="Professional Writers"
          center
        />
      </NavLogo>

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
     font-size:  ${setRem(14)};
     padding: ${setRem(5)};
  }
  `}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;
export default Navbar;
