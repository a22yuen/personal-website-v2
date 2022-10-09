//react navbar component with 2 links
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  margin-top: 32px;
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }
`;

export default function Header() {

  return (
    <Nav>
      <>
      Anson Yuen
      </>
      <br/>
      <NavLinks to="/">me</NavLinks>
      <NavLinks to="/experience">experience</NavLinks>
    </Nav>
  );
}
