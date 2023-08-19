import React from 'react';
import { Typography, Grid, Avatar } from '@mui/material';
import { AboutSection } from '../styles/AboutMe.styles';

const AboutMe: React.FC = () => {
  return (
    <AboutSection>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4} md={3}>
          <Avatar
            alt="Your Name"
            src="../images/profilepic.jpeg"
            style={{ width: '150px', height: '150px' }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h4">About Me</Typography>
          <Typography variant="body1">
            Hello! I'm Sam Jones, a full-stack developer based in Seattle, WA.
          </Typography>
          <Typography variant="body1">
            I specialize in React, Node.js, and other modern web technologies. Feel free to browse my projects and
            contact me if you have any questions or opportunities.
          </Typography>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default AboutMe;
