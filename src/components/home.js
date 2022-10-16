import React from "react";
import Header from "./header";
import styled from "styled-components";
import { MainContainer } from "../styles";
import { Footer } from "./footer";

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
        I'm Anson, a third-year computer science student in University of Waterloo. I'm currently interning as 
        a Software Developer at {" "}
        <a href="https://citylitics.com/" target="_blank">Citylitics</a>.
        <br />
        <br />
        I'm always focused on building and working on projects that leave a lasting 
        impact, regardless of scope. This could be creating a personal project for a nuanced purpose,
        implementing features for my company's next release, or writing documentation to save time for future users.
        <br />
        <br />
        I enjoy trying new cuisines, playing indie video games, and working out! 
        I love to talk; I have a stance on topic, and if I don't know, I'll learn it.  
      </AboutMe>
      <Footer/>
    </MainContainer>
  );
}
