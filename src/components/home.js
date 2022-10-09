import React from "react";
import Header from "./header";
import styled from "styled-components";
import { MainContainer } from "../styles";
import Footer from "./footer";

const AboutMe = styled.p`
  line-height: 1.75;
  margin: 0 0 30px;
`;

const Title = styled.div`
  background-color: ;
  width: auto
`;

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Title><h1>Hey!</h1></Title>
      <AboutMe>
        I'm Anson, a software engineer based in Toronto, Canada. I'm currently
        working at{" "}
        <a href="https://www.ubisoft.com/en-ca/" target="_blank">
          Ubisoft
        </a>{" "}
        on{" "}
        <a href="https://www.ubisoft.com/en-ca/game/assassins-creed/valhalla" target="_blank">
          Assassin's Creed Valhalla
        </a>
        . I'm passionate about building great software and learning new things.
      </AboutMe>
      <Footer/>
    </MainContainer>
  );
}
