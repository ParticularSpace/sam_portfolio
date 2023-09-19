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

export const CardBackground = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  filter: blur(3px);
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
  overflow: hidden; // Hide the overflow of the blurred background

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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  overflow: hidden; // Hide the overflow of the blurred background

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const TitleBox = styled.div`
  background-color: rgba(255, 255, 255, 0.9); // Semi-transparent white background
  border: 2px solid #6b5879;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  z-index: 1; // Place it above the blurred background
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