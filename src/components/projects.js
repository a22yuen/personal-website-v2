import React from "react";
import styled from "styled-components";
import { ExperienceContainer, Link, Title, Subtitle, Description  } from "../styles";

const projects = [
  {
    project: "PricePal",
    description: "PricePal is a web app that helps you find the best deals on Amazon. It uses a web scraper to scrape Amazon and then uses a machine learning model to predict the best deals.",
    link: "https://github.com/bill-li1/PricePal",
    tech: "React, GraphQL, Mongoose",
  }
];

export const Projects = () => {
  return (
    <>
      {projects.map(({ project, description, link, tech }) => {
        return (
          <ExperienceContainer key={project}>
            <Title><Link href={link}>{project}</Link> | <Subtitle>{tech}</Subtitle></Title>
            <Description>{description}</Description>
          </ExperienceContainer>
        );
      })}
    </>
  );
};