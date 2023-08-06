import styled from "styled-components";

import { Button } from "@mui/material";

type StyledProps = {
  theme: string;
};

export const HomePageWrapper = styled.div<StyledProps>`
  height: 100%; /* Span the entire height of the viewport */
  width: 100%; /* Span the entire width of the viewport */
  position: fixed; /* Fixed positioning */
  top: 0;
  left: 0;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  overflow: hidden;
  z-index: -1; /* Sit behind other content */
  background-color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
`;

export const ProjectsSection = styled.div`
width: 100%;
padding: 50px 0; 
background-color: 0.3; 
`;

export const SliderWrapper = styled.div`
max-width: 1200px;
width: calc(100% - 100px);
padding: 0 10px;
margin: 0 auto; 
`;

export const ProjectCard = styled.div`
flex: 0 0 auto;
width: 300px;
height: 250px;
margin: 20px 10px;
background-color: #e0e0e0;
scroll-snap-align: start;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
box-sizing: border-box;
`;

export const CarouselContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
overflow: hidden;
padding: 10px 40px;
max-width: 100%;
maring: 0 auto;
`;

export const ArrowButton = styled(Button)`
margin: 0 10px;
min-width: auto;
`;
