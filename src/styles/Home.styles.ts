import styled from "styled-components";

type StyledProps = {
  theme: string;
};

export const HomePageWrapper = styled.div<StyledProps>`
  height: 100%; 
  width: 100%; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  overflow: hidden;
  z-index: -1; 
  background-color: white;
`;


export const ProjectsSection = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const ShowcaseProjectCard = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e0e0e0;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  height: 250px;
  background-color: #e0e0e0;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const SliderWrapper = styled.div`
max-width: 70%;
padding: 0 10px;
margin-top: 5px; 
margin-bottom: 15px; 
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

type SectionTitleProps = {
  isDarkMode: boolean;
};

export const SectionTitle = styled.div<SectionTitleProps>`
  padding: 10px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#181818" : "#f5f5f5")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
  width: fit-content;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  margin: 15px 15px;
  text-align: left;
`;



