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
  color: "black";
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
    link: "",
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
