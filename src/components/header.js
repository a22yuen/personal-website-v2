//react navbar component with 2 links
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flowey from "../assets/flowey.png";
import Moon from "../assets/moon.svg";

const Nav = styled.header`
  margin: auto;
  margin-top: 100px;
  margin-bottom: 20px;
  background-color: #b1b8e6;
  padding: 20px;
  width: 665px;
  color: white;
  border-radius: 5px;
`;

const Button = styled.button`
  color: white;
  float: right;
  border-radius: 5px;
  border: none;
`;

const Title = styled.div`
  padding-bottom: 5px;
  font-size: 25px;
  position: relative;
`;

const Icon = styled.img`
  margin-left: 10px;
  width: 40px;
  position: absolute;
  bottom: 0;
`;

const MoonIcon = styled.img`
  width: 20px;
  padding: 2px;
  padding-top: 5px;
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  margin-right: 7px;
  color: white;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }
`;

export default function Header() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    console.log("toggle theme");
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <Nav>
      <Title>
        Anson Yuen
        <Icon src={Flowey} />
        <Button onClick={toggleTheme}>
          <MoonIcon src={Moon} />
        </Button>
      </Title>
      <NavLinks to="/">about</NavLinks>|
      <NavLinks style={{ marginLeft: "7px" }} to="/experience">
        experience
      </NavLinks>
    </Nav>
  );
}
