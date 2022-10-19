import React from "react";
import styled from "styled-components";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Mail from "../assets/mail.svg";
import Resume from "../assets/resume.svg";

const Icon = styled.img`
  margin-right: 35px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.color};
`;

const Container = styled.div`
  bottom: 0;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
`;

const links = [
  {
    link: "https://www.linkedin.com/in/a22yuen/",
    icon: LinkedIn,
  },
  {
    link: "https://github.com/a22yuen",
    icon: GitHub,
  },
  {
    link: "mailto:a22yuen@uwaterloo.ca",
    icon: Mail,
  },
  {
    link: "https://drive.google.com/file/d/1HwafjO8eB_mmmsCZg1VpyD5BWd8Ee4A8/view?usp=sharing",
    icon: Resume,
  },
];

export const Footer = () => {
  return (
    <Container>
      {links.map(({ link, icon }) => {
        return (
          <a key={link} href={link}>
            <Icon src={icon} />
          </a>
        );
      })}
    </Container>
  );
};
