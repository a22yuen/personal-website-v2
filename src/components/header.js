import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flowey from "../assets/flowey.png";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.header`
  margin: auto;
  margin-top: 100px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.header};
  padding: 20px;
  max-width: 665px;
  border-radius: 5px;
  color: ${(props) => props.theme.headerText};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.headerText};
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

  &:hover {
    cursor: pointer;
  }
`;

const Playing = styled.a`
  color: ${(props) => props.theme.headerText};
  text-decoration: none;
  float: right;
  font-size: 12.8;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled(Link)`
  text-decoration: none;
  margin-right: 7px;
  color: inherit;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 1px;
  }
`;

export default function Header() {
  const { backgroundColor, toggleDark, isDark } = useTheme();

  const toggleTheme = () => {
    toggleDark();
  };

  return (
    <Nav>
      <Title>
        Anson Yuen
        <Icon src={Flowey} />
        <Button onClick={toggleTheme}>
          <ToggleIcon src={isDark ? Sun : Moon} />
        </Button>
      </Title>
      <NavLinks to="/">about</NavLinks>|
      <NavLinks style={{ marginLeft: "7px" }} to="/experience">
        experience
      </NavLinks>
      {isDark ? (
        <Playing
          target="_blank"
          href="https://www.youtube.com/watch?v=zNd4apsr3WE"
        >
          now playing: it's raining somewhere else
        </Playing>
      ) : null}
    </Nav>
  );
}
