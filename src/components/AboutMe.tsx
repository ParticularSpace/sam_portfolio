import React from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import { AboutSection } from "../styles/AboutMe.styles";
import { useThemeContext } from "../styles/ThemeContext";

const AboutMe: React.FC = () => {
  const { isDarkMode } = useThemeContext(); 
  
  return (
    <AboutSection isDarkMode={isDarkMode}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4} md={3}>
          <Avatar
            alt="Your Name"
            src="../images/profilepic.jpeg"
            style={{ width: "150px", height: "150px" }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="body1" style={{ color: isDarkMode ? 'white' : 'black' }}>
            Hello! My name is Sam Jones a graduate of the UC Berkeley Coding Bootcamp, and I am a full-stack developer based in Seattle, WA.
          </Typography>
          <Typography variant="body1">
            Driven by curiosity and a passion for problem-solving, my projects
            range from innovative personal experiments to robust professional
            solutions. Through continuous learning and collaboration, I strive
            to develop code that not only functions seamlessly but also makes a
            meaningful impact. Feel free to browse my portfolio to explore my
            projects and discover my unique approach to coding. If you have any
            questions, opportunities, or just want to chat about technology,
            please don't hesitate to contact me.
          </Typography>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default AboutMe;
