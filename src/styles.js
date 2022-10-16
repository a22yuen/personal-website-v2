import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: auto;
  max-width: 600px;
  

  @media (min-width: 768px) { 
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 600px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Subtitle = styled.h5`
  margin: 10px 0;
  display: inline;
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;