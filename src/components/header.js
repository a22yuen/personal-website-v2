//react navbar component with 2 links
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flowey from "../assets/flowey.png";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";
import { useTheme } from "styled-components";

const Nav = styled.header`
  margin: auto;
  margin-top: 100px;
  margin-bottom: 20px;
  background-color: #b1b8e6;
  padding: 20px;
  width: 665px;
  color: #ffffff;
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
  font-size: 1.8rem;
`;

const Icon = styled.img`
  margin-left: 10px;
  width: 40px;
  position: absolute;
  bottom: 0;
`;

const ToggleIcon = styled.img`
  width: 20px;
  padding: 2px;
  padding-top: 5px;
`;

const NavLinks = styled(NavLink)`
  text-decoration: none;
  margin-right: 7px;
  color: white;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }
`;

export default function Header() {
  const { setDark } = useTheme();
  const isDark = useTheme().color === "white";

  return (
    <Nav>
      <Title>
        Anson Yuen
        <Icon src={Flowey} />
        <Button onClick={setDark}>
          <ToggleIcon src={isDark ? Sun : Moon} />
        </Button>
      </Title>
      <NavLinks to="/">about</NavLinks>|
      <NavLinks style={{ marginLeft: "7px" }} to="/experience">
        experience
      </NavLinks>
    </Nav>
  );
}
