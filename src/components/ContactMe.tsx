import React from "react";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import { ContactForm } from "../styles/Contact.styles";

function ContactMe() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Contact Me
      </Typography>
      <ContactForm>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Name"
              variant="outlined"
              InputProps={{
                startAdornment: <PersonIcon color="action" />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Email"
              variant="outlined"
              type="email"
              InputProps={{
                startAdornment: <EmailIcon color="action" />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              InputProps={{
                startAdornment: <MessageIcon color="action" />,
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" size="large">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </ContactForm>
    </Container>
  );
}

export default ContactMe;
