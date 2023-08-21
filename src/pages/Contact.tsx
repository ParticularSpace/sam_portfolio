import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, TextField, Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { ContactForm } from '../styles/Contact.styles';

import Header from '../components/Header';

const Contact: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email is not valid'),
    message: Yup.string().required('Message is required'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = (data: any) => {
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsSubmitted(true);
        reset(); // Reset form fields
      } else {
        setSubmitError('An error occurred. Please try again.');
      }
    }, 1000);
  };

  return (
    <>
    <Header />
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" align="center">
        Contact Me
      </Typography>
      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Name"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name ? errors.name.message : null}
                  InputProps={{ startAdornment: <PersonIcon color="action" /> }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : null}
                  InputProps={{ startAdornment: <EmailIcon color="action" /> }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message ? errors.message.message : null}
                  InputProps={{ startAdornment: <MessageIcon color="action" /> }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Send Message
            </Button>
            {isSubmitted && <Typography variant="body1" color="success">Message sent successfully!</Typography>}
            {submitError && <Typography variant="body1" color="error">{submitError}</Typography>}
          </Grid>
        </Grid>
      </ContactForm>
    </div>
    </>
  );
};

export default Contact;
