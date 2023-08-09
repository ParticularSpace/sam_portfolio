import styled from "styled-components";

type StyledProps = {
  theme: string;
};

export const HomePageWrapper = styled.div<StyledProps>`
  height: 100%; 
  width: 100%; 
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
  overflow: hidden;
  z-index: -1; 
`;

export const ProjectsSection = styled.div`
width: 100%;
padding: 20px 0; 
background-color: 0.3; 
`;

export const SliderWrapper = styled.div`
max-width: 70%;
padding: 0 10px;
margin: 10%; 
`;

export const ProjectCard = styled.div`
  width: 100%;
  height: 250px;
  margin: 20px 10px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 20px 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
  }
`;

export const CarouselContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
overflow: hidden;
padding: 0;
margin: 0;
`;


