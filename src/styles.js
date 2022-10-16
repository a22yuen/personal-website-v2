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

const border = "2px solid #D3D3D3";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 600px;
  padding: 13px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;

  &:before{
    position: absolute;
    width: 80px;
    height: 30px;
    border-radius: 5px 0px;
    content: "";
  }

  &:before {
    left: 0;
    top: 0;
    border-left: ${border};
    border-top: ${border};
  }

`;

export const Title = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h4`
  margin: 10px 0;
  display: inline;
  font-weight: 400;
`;

export const Description = styled.h5`
  margin: 0;
  font-weight: 400;
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;