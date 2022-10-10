import React from "react";
import styled from "styled-components";
import { ExperienceContainer } from "../styles";

const projects = [
  {
    project: "PricePal",
    description: "PricePal is a web app that helps you find the best deals on Amazon. It uses a web scraper to scrape Amazon and then uses a machine learning model to predict the best deals.",
    link: "",
    tech: "React, Django, Docker, GCP",
  }
];

export const Projects = () => {
  return (
    <>
      {projects.map(({ project, description, link, tech }) => {
        return (
          <ExperienceContainer key={project}>
            <h3>{project}</h3>
            <p>{description}</p>
            <a href={link}>{link}</a>
            <h5>{tech}</h5>
          </ExperienceContainer>
        );
      })}
    </>
  );
};