import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
  width: 100vw; 
  height: 50vh; 
  padding: 5px 5px; 
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FigureAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimatedFigureWrapper = styled.div`
  width: 300px; 
  height: 300px;
  background-color: rgba(0,0,0,0.1);
  border: 2px solid black;
  margin: 20px; 
`;

export const LinkedInButton = styled.a`
    background-color: #0072b1; // LinkedIn's color
    padding: 10px 20px; 
    color: white; 
    border-radius: 5px; 
    text-decoration: none; 
    transition: background-color 0.2s ease; 

    &:hover {
        background-color: #005582; 
    }
`;

export const LinkedInPostsWrapper = styled.div`
    width: 80%; 
    height: 400px; 
    background-color: grey; 
    margin-top: 20px; 
    margin-right: 30px;
    border: 1px solid #ddd;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
    overflow-y: auto; 
    padding: 10px; 
`;

export const AboutMeTextWrapper = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px; 
`;
