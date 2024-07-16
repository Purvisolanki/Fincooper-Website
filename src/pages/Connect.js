import React, { useState } from 'react';
import { Grid, Box, TextField, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import ReactiveButton from 'reactive-button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#09A3C6',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#09A3C6',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
 
const steps = [
  {
    id: '1',
    message: 'Hello! from Fincooper👋,What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true,
  },
];

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
  const [chatOpen, setChatOpen] = useState(false);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setState('loading');

    // simulate an HTTP request
    setTimeout(() => {
      setState('success');
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <StyledTypography variant="h1" sx={{ color: "white", fontWeight: 700, fontSize: { xs: '24px', md: '42px' } }}>
            Let’s connect
          </StyledTypography>
          <Typography sx={{  marginLeft: { xs: '5%', md: '8%' }, marginRight: { xs: '5%', md: '5%' } }}>
            You are a message away to get the innovative experts helping you in building 
            your next with us. Our team’s mission is to craft your vision & get it delivered!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} justifyContent="center">
          <Box component="img" src='assets/connect.png' alt='connect' sx={{  width: '80%' }} />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: "#09A3C6", fontWeight: 700 ,fontSize:"36px"}}>How we can help</Typography>
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
                    Name
                    <Field 
                      name="name" 
                      as={TextField} 
                      fullWidth 
                      id="outlined-basic" 
                      // label="Name" 
                      variant="outlined" 
                      helperText={<ErrorMessage name="name" />} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    Email
                    <Field 
                      name="email" 
                      as={TextField} 
                      fullWidth 
                      id="outlined-basic" 
                      // label="Email" 
                      variant="outlined" 
                      helperText={<ErrorMessage name="email" />} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 0 } }}>
                  Phone Number
                    <Field 
                      name="phoneNumber" 
                      as={TextField} 
                      fullWidth 
                      id="outlined-basic" 
                      // label="Phone Number" 
                      variant="outlined" 
                      helperText={<ErrorMessage name="phoneNumber" />} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 2, sm: 0 } }}>
                    Company
                    <Field 
                      name="company" 
                      as={TextField} 
                      fullWidth 
                      id="outlined-basic" 
                      // label="Company" 
                      variant="outlined" 
                      helperText={<ErrorMessage name="company" />} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} sx={{ marginTop: 2 }}>
                    Message
                    <Field
                      name="message"
                      as={TextField}
                      // id="outlined-multiline-static"
                      // label="Message"
                      multiline
                      fullWidth
                      rows={4}
                      helperText={<ErrorMessage name="message" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} sx={{ marginTop: 2 }}>
                  How do you know about us?
                    <Field
                      name="reference"
                      as={TextField}
                      id="outlined-multiline-static"
                      // label="How do you know about us?"
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
      <Grid container justifyContent="flex-end" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <IconButton color="primary" onClick={toggleChat}>
          <ChatIcon />
        </IconButton>
      </Grid>
      {chatOpen && (
      <Box
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 16,
          width: 'auto',
          height: 'auto',
          boxShadow: 3,
          borderRadius: 1,
          overflow: 'hidden',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            // display: 'flex',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // padding: 1,
            // borderBottom: '1px solid #ddd',
            // backgroundColor: 'transparent',
          }}
        >
          <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />
        </ThemeProvider>
          <IconButton size="small" onClick={toggleChat}>
            <CloseIcon />
          </IconButton>
        </Box>
        
      </Box>
    )}
    </Box>
  );
}
