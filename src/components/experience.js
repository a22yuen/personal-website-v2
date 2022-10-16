//react import component
import React from "react";
import Header from "./header";
import { MainContainer } from "../styles";
import { Footer } from "./footer";
import { Jobs } from "./jobs";
import { Projects } from "./projects";
import styled from "styled-components";

const Title = styled.h1`
  // text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 2px;
  margin: 0;
  margin-top: 20px;
`
const Line = styled.hr`
  border: 0;
  border-top: 2px solid black;
  width: 35%;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export default function Experiences() {
  return (
    <MainContainer>
      <Header />
      <Title>Jobs</Title>
      <Line />
      <Jobs />
      <Title>Projects</Title>
      <Line />
      <Projects />
      <Footer/>
    </MainContainer>
  );
}
