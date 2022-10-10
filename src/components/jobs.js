import React from "react";
import styled from "styled-components";
import { ExperienceContainer } from "../styles";

const jobs = [
  {
    role: "Software Engineer",
    company: "Citylitics",
    date: "Sept 2022 - Present",
    location: "Toronto",
    tech: "React, Django, Docker, GCP",
    description: "Citylitics is a startup that processes infrastructure data to help clients find new business opportunities.",
    link: "https://citylitics.com/",
    icon: ""
  },
];

export const Jobs = () => {
  return (
    <>
      {jobs.map(({ role, company, date, location, tech, description, link, icon }) => {
        return (
          <ExperienceContainer key={company}>
            <h3>{role}</h3>
            <h4>{company}</h4>
            <h5>{date}</h5>
            <h5>{location}</h5>
            <h5>{tech}</h5>
            <p>{description}</p>
            <a href={link}>{link}</a>
          </ExperienceContainer>
        );
      })}
    </>
  );
};