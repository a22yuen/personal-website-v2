//react import component
import React from "react";
import Header from "./header";
import { MainContainer } from "../styles";
import { Footer } from "./footer";
import { Jobs } from "./jobs";
import { Projects } from "./projects";
import styled from "styled-components";

const Title = styled.h1`
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
`

export default function Experiences() {
  return (
    <MainContainer>
      <Header />
      <Title>Jobs</Title>
      <Jobs />
      <Title>Projects</Title>
      <Projects />
      <Footer/>
    </MainContainer>
  );
}
