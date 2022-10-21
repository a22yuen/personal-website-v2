import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: auto;
  max-width: 660px;
  color: ${(props) => props.theme.color};
  @media (min-width: 768px) {
  }
`;

export const light = {
  color: "black",
  border: "1px solid #5a5a5a",
  backgroundColor: "white",
  header: "#b1b8e6",
  headerText: "white",
};
export const dark = {
  color: "#aaaaaa",
  border: "1px solid #bababa",
  backgroundColor: "black",
  header: "#4859c4",
  headerText: "#bababa",
};

const border = `1px solid`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: auto;
  padding: 13px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;
  color: ${(props) => props.theme.color};

  &:before {
    position: absolute;
    width: 80px;
    height: 30px;
    border-radius: 5px 0px;
    content: "";
    z-index: -1;
    left: 0;
    top: 0;
    border-left: ${(props) => props.theme.border};
    border-top: ${(props) => props.theme.border};
  }
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 10px;
  color: inherit;
`;

export const Subtitle = styled.h4`
  margin: 10px 0;
  display: inline;
  font-weight: 400;
  font-size: 1.15rem;
  color: inherit;
`;

export const Description = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 1.15rem;
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
