import React from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import { AboutSection } from "../styles/AboutMe.styles";
import { useThemeContext } from "../styles/ThemeContext";

const AboutMe: React.FC = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <AboutSection isDarkMode={isDarkMode}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h4" style={{ marginBottom: "30px" }}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            Hey there! I'm Sam Jones, and I've got the UC Berkeley Coding
            Bootcamp to thank for catapulting me into the world of full-stack
            development. I'm currently living in Seattle, WA. 
            <br />
            <br />
            You know how some people are driven by
            curiosity? That's me in a nutshell. Whether it's a nifty little
            coding experiment or a full-blown professional application, I get a
            kick out of solving problems and turning ideas into reality.
            <br />
            <br />
             Learning never stops in this field, and I couldn't be more grateful. I keep pushing the boundaries of what I know,
            constantly collaborating with other smart folks and picking up new
            tricks along the way. So go ahead, take a look around my portfolio.
          </Typography>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default AboutMe;
