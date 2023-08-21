import styled from 'styled-components';

type AboutMeProps = {
  isDarkMode: boolean;
};

export const AboutSection = styled.div<AboutMeProps>`
  padding: 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#181818" : "#f5f5f5")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
  border-radius: 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 30px 15px;

  .MuiTypography-h4 {
    margin-bottom: 15px;
  }

  .MuiTypography-body1 {
    margin-bottom: 10px;
  }
`;
