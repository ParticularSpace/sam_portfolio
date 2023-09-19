import React from 'react';
import { IconButton, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArtisticLine = styled.div`
  width: 100%;
  height: 2px;
  background: white;
  margin: 1rem 0;
`;

const ContactButton = styled(Button)`
  && {
    background-color: transparent;
    color: white;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    border: 5px solid white;
    &:hover {
      background-color: white;
      color: red;
      border: 5px solid red;
    }
  } 
`;


const Socials: React.FC = () => {
  const iconStyle = {
    backgroundColor: 'white',
    padding: '0.3rem',
    margin: '0.4rem',
    borderRadius: '50%',

  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'red' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <IconButton style={iconStyle} href="https://www.linkedin.com/in/yourusername" target="_blank">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton style={iconStyle} href="https://twitter.com/yourusername" target="_blank">
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <ArtisticLine />
        </Grid>
        <Grid item>
          <IconButton style={iconStyle} href="https://github.com/ParticularSpace" target="_blank">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton style={iconStyle} href="https://www.instagram.com/yourusername" target="_blank">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <ArtisticLine />
      <Link to="/contact">
        <ContactButton variant="outlined">Contact Me</ContactButton>
      </Link>
    </div>
  );
};

export default Socials;
