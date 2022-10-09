import React from "react";
import styled from "styled-components";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Mail from "../assets/mail.svg";

const Icon = styled.img`
  margin-right: 35px;
  width: 20px;
`;

const Container = styled.div`
  bottom: 0;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
`;

const links = [
  {
    link: "https://github.com/a22yuen",
    icon: GitHub,
  },
  {
    link: "https://www.linkedin.com/in/a22yuen/",
    icon: LinkedIn,
  },
  {
    link: "mailto:a22yuen@uwaterloo.ca",
    icon: Mail,
  }
];

export default function Footer(){
  return (
    <Container>
      {links.map(({ link, icon }) => {
        return (
          <a key={link} href={link}><Icon src={icon}/></a>
        );
      })}
    </Container>
  );
};
