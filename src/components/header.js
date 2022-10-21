import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flowey from "../assets/flowey.png";
import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";
import { useTheme } from "styled-components";
import vibes from "../assets/its-raining-somewhere-else.mp3";

const Nav = styled.header`
  margin: auto;
  margin-top: 100px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.header};
  padding: 20px;
  width: 665px;
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
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled(NavLink)`
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
  const { backgroundColor, setDark } = useTheme();
  const [playMusic, setMusic] = useState(false);

  const music = useRef();

  useEffect(() => {
    music.current.volume = `0.1`;
    playMusic ? music.current.play() : music.current.pause();
  }, [playMusic]);

  const toggleTheme = () => {
    setDark();
    setMusic(!playMusic);
  };

  return (
    <Nav>
      <audio src={vibes} autoPlay ref={music} />
      <Title>
        Anson Yuen
        <Icon src={Flowey} />
        <Button onClick={toggleTheme}>
          <ToggleIcon src={backgroundColor === "black" ? Sun : Moon} />
        </Button>
      </Title>
      <NavLinks to="/">about</NavLinks>|
      <NavLinks style={{ marginLeft: "7px" }} to="/experience">
        experience
      </NavLinks>
      {playMusic ? (
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
