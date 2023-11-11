import React from "react";
import Header from "./header";
import styled from "styled-components";
import { MainContainer, Link } from "../styles";
import { Footer } from "./footer";

const AboutMe = styled.p`
  line-height: 1.75;
  margin: 0 0 30px;
  font-size: 1.15rem;
`;

const Title = styled.div`
  width: auto;
`;

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>
          <h1>Hey!</h1>
        </Title>
        <AboutMe>
          I'm Anson, a Fourth-year computer science student at the University of
          Waterloo. I've recently completed my internship as a Software Developer Intern at{" "}
          <Link href="https://www.konrad.com/" target="_blank">
            Konrad Group
          </Link>
          , and I'll be starting in January 2024 as a Software Engineer Intern at {" "}
          <Link href="https://www.zanbato.com/" target="_blank">
            Zanbato 
          </Link>
          . I'm currently seeking a Summer 2024 internship!
          <br />
          <br />
          I'm always focused on building and working on projects that leave a
          lasting impact, regardless of scope. This could be creating a personal
          project for a nuanced purpose, implementing features for my company's
          next release, or writing documentation to save time for future users.
          <br />
          <br />I enjoy trying new cuisines, playing indie video games, and
          working out! I love to talk; I have a stance on topic, and if I don't
          know, I'll learn it. Feel free to reach out if you're interested in
          talking!
        </AboutMe>
        <Footer />
      </MainContainer>
    </>
  );
}
