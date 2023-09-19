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


export const StyledButton = styled.button<{ buttonColor: string, textColor: string }>`
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.buttonColor};
  width: 30rem;
  height: 5rem;
  margin: 5px;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
    height: 4rem;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: darkgrey;
  }

  &:active {
    background-color: black;
    color: white;
  }
`;

type SectionTitleProps = {
  isDarkMode: boolean;
};

export const SectionTitle = styled.div<SectionTitleProps>`
  padding: 0;
  background-color: transparent;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
  width: fit-content;
  border-radius: 5px;
  box-shadow: none;
  margin: 5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;


export const AboutMeWrapper = styled.div`
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;  
  width: 90%;  
`;

export const CardBackground = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  z-index: -1;
`;

export const ShowcaseProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  z-index: 1;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  z-index: 1;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);

    .hoverBanner {
      opacity: 0;
    }
  }
`;



export const ProjectsSection = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;


export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
    
`;


export const ProjectGridWrapper = styled.div<{ isDarkMode: boolean }>`
  padding: 1rem;
  background-color: #0a3d62;
  margin-left: 0;
  margin-right: 0;
  z-index: 1;
  h4 {
    text-align: left;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 1rem;
  text-align: left;
  width: 100%;
  background-color: red;
  `;

  export const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1; // Always show on mobile
  }
`;

export const ProjectTitle = styled.h4`
  margin: 0;
  font-size: 1.2rem;
`;

export const ProjectDescription = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
`;

export const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TechItem = styled.li`
  margin-right: 10px;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;
