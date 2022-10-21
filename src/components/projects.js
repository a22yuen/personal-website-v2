import React from "react";
import styled from "styled-components";
import {
  ExperienceContainer,
  Link,
  Title,
  Subtitle,
  Description,
} from "../styles";

const projects = [
  {
    project: "Personal Website",
    description: "This website! Used to showcase my projects and experiences.",
    link: "https://github.com/a22yuen/personal-website-v2",
    tech: "React, Styled Components",
  },
  {
    project: "PricePal",
    description:
      "A web app that tracks debts and splits expenses between friends.",
    link: "https://github.com/bill-li1/PricePal",
    tech: "React, GraphQL, Mongoose",
  },
  {
    project: "Food Experiences",
    description:
      "A web app that allows users to share their food experiences with others. Users can create posts, comment on posts, and like posts.",
    link: "https://github.com/a22yuen/food-experiences",
    tech: "React, MongoDB, Express",
  },
];

export const Projects = () => {
  return (
    <>
      {projects.map(({ project, description, link, tech }) => {
        return (
          <ExperienceContainer key={project}>
            <Title>
              <Link href={link} target="_blank">
                {project}
              </Link>{" "}
              <Subtitle> | {tech}</Subtitle>
            </Title>
            <Description>{description}</Description>
          </ExperienceContainer>
        );
      })}
    </>
  );
};
