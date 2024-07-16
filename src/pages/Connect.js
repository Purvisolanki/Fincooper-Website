import React, { useState } from 'react';
import { Grid, Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ReactiveButton from 'reactive-button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AnimatedButton = styled(ReactiveButton)({
  margin: '20px auto 0 auto',
  display: 'block',
  animation: 'pulse 2s infinite',
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: 'hsl(0, 0%, 28%)',
  fontSize: '50px',
  fontWeight: 'bold',
  fontFamily: 'monospace',
  letterSpacing: '7px',
  cursor: 'pointer',
  textTransform: 'uppercase',
  padding: '64px',
  background: 'linear-gradient(to right, hsl(0, 0%, 30%) 0%, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'shine 3s infinite linear',
  '@keyframes shine': {
    '0%': { backgroundPosition: '0' },
    '60%': { backgroundPosition: '600px' },
    '100%': { backgroundPosition: '600px' },
  },
}));

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  company: Yup.string().required('Company is required'),
  message: Yup.string().required('Message is required'),
  reference: Yup.string().required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  company: '',
  message: '',
  reference: '',
};

export default function Connect() {
  const [state, setState] = useState('idle');

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setState('loading');

    // simulate an HTTP request
    setTimeout(() => {
      setState('success');
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ backgroundColor: "#09A3C6", padding: 4 }}>
          <StyledTypography variant="h1" sx={{ color: "white", fontWeight: 700, fontSize: { xs: '24px', md: '42px' } }}>
            Let’s connect
          </StyledTypography>
          <Typography sx={{ color: "white", marginLeft: { xs: '5%', md: '5%' }, marginRight: { xs: '5%', md: '5%' } }}>
            You are a message away to get the innovative experts helping you in building 
            your next with us. Our team’s mission is to craft your vision & get it delivered!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="img" src='assets/connect.jpg' alt='connect' sx={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: "#09A3C6", fontWeight: 700 }}>How we can help</Typography>
          <Typography sx={{ marginTop: 2 }}>Start your awesome experience now, Get in touch with us to see how we can create awesome for you.</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 4, width: "auto" }}>
  <Grid 
    item 
    xs={12} 
    md={8} 
    sx={{
      width: "auto", 
      border: { xs: "1px solid", md: "2px solid" }, 
      borderColor: "#09A3C6", 
      padding: { xs: 1, md: 2 }, 
      marginBottom: "5%"
    }}
  >
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field 
                name="name" 
                as={TextField} 
                fullWidth 
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                helperText={<ErrorMessage name="name" />} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field 
                name="email" 
                as={TextField} 
                fullWidth 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                helperText={<ErrorMessage name="email" />} 
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 0 } }}>
              <Field 
                name="phoneNumber" 
                as={TextField} 
                fullWidth 
                id="outlined-basic" 
                label="Phone Number" 
                variant="outlined" 
                helperText={<ErrorMessage name="phoneNumber" />} 
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 0 } }}>
              <Field 
                name="company" 
                as={TextField} 
                fullWidth 
                id="outlined-basic" 
                label="Company" 
                variant="outlined" 
                helperText={<ErrorMessage name="company" />} 
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ marginTop: 2 }}>
              <Field
                name="message"
                as={TextField}
                id="outlined-multiline-static"
                label="Message"
                multiline
                fullWidth
                rows={4}
                helperText={<ErrorMessage name="message" />}
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ marginTop: 2 }}>
              <Field
                name="reference"
                as={TextField}
                id="outlined-multiline-static"
                label="How do you know about us?"
                fullWidth
                helperText={<ErrorMessage name="reference" />}
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ textAlign: 'center', marginTop: 2 }}>
              <AnimatedButton
                shadow
                buttonState={state}
                idleText="Submit"
                loadingText="Loading"
                successText="Done"
                type='submit'
                sx={{ backgroundColor: "#09A3C6" }}
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </Grid>
</Grid>

    </Box>
  );
}
