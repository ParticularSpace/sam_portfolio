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
    transform: scale(1.05);
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
    transform: scale(1.02);
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
