import React from "react";
import styled from "styled-components";
import {
  ExperienceContainer,
  Link,
  Title,
  Subtitle,
  Description,
} from "../styles";

const jobs = [
  {
    role: "Software Engineer",
    company: "Citylitics",
    date: "Fall 2022",
    location: "Toronto",
    tech: "React, Django, Docker, GCP",
    description:
      "Implement developer tools to assist with entity relationship visualization, and organized documentation to outline company features.",
    link: "https://citylitics.com/",
    icon: "",
  },
  {
    role: "Full Stack Developer",
    company: "LCBO|Next",
    date: "Winter 2022",
    location: "Toronto",
    tech: "React, Flask, Azure, Kubernetes, Docker",
    description:
      "Developed responsive web interface for LCBO's internal teams to manage their data.",
    link: "https://www.lcbonext.com/",
    icon: "",
  },
  {
    role: "Junior Software Developer",
    company: "Healthconnex",
    date: "Spring/Fall 2021",
    location: "Toronto",
    tech: "Vue.js, Typescript, AWS S3 & Lambda, Serverless Framework",
    description:
      "Developed Lambda microservice to dynamically generate pdf reports for clients.",
    link: "https://www.lcbonext.com/",
    icon: "",
  },
];

const Tech = styled.h5`
  margin: 0;
  margin-bottom: 10px;
`;

const Company = styled(Link)`
  font-weight: 400;
`;

export const Jobs = () => {
  return (
    <>
      {jobs.map(
        ({ role, company, date, location, tech, description, link, icon }) => {
          return (
            <ExperienceContainer key={company}>
              <Title>
                {role} @{" "}
                <Company target="_blank" href={link}>
                  {company}
                </Company>{" "}
                <Subtitle> | {date}</Subtitle>
              </Title>
              <Tech>
                {location} | {tech}
              </Tech>
              <Description>{description}</Description>
            </ExperienceContainer>
          );
        }
      )}
    </>
  );
};
