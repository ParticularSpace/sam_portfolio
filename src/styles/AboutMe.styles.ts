// AboutMe.styles.ts

import styled from "styled-components";

type StyledProps = {
  isDarkMode: boolean;
};

export const AboutSection = styled.div<StyledProps>`
  color: red;
  text-align: left;  
  margin-bottom: 30px;
`;
