//react navbar component with 2 links
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flowey from "../assets/flowey.png";
import Moon from "../assets/moon.svg";

const Nav = styled.header`
  margin-top: 100px;
  background-color:  #BE97D0;
  padding: 20px;
  width: 100%;
  color: white;
  border-radius: 5px;
  color: #F2F2F2;

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
`

const Icon = styled.img`
  margin-left: 10px;
  width: 40px;
  position: absolute;
  bottom: 0;
`;

const MoonIcon = styled.img`
  width: 20px;
  padding: 2px;
`

const NavLinks = styled(NavLink)`
  text-decoration: none;
  margin-right: 7px;
  margin-left: 7px;
  color: #F2F2F2;


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
      <Icon src={Flowey}/>
      <Button onClick={toggleTheme}><MoonIcon src={Moon}/></Button>
      </Title>
      <NavLinks to="/">about</NavLinks>
      |
      <NavLinks to="/experience">experience</NavLinks>
    </Nav>
  );
}
