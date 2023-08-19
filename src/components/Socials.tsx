import React from 'react';
import { IconButton, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Socials: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item>
          <IconButton href="https://www.linkedin.com/in/yourusername" target="_blank">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://twitter.com/yourusername" target="_blank">
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://github.com/ParticularSpace" target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.instagram.com/yourusername" target="_blank">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Socials;
