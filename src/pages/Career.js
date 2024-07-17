import React from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Cards from '../components/Card';

const Openings = [
  { img: 'assets/ui-ux.jpeg', position: 'UI/UX Developer', experience: '2-5 years of experience', apply: 'Apply Now' },
  { img: 'assets/nodejs.png', position: 'Nodejs Developer', experience: 'min 1 years of experience', apply: 'Apply Now' },
  { img: 'assets/mern.jpeg', position: 'MERN Stack Developer', experience: 'Fresher', apply: 'Apply Now' },
  { img: 'assets/tester.jpg', position: 'Software Tester', experience: 'min 3 years of experience', apply: 'Apply Now' }
];

const Career = () => {
  
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 5,
        width: '100%',
        backgroundColor: '#09A3C6',
        backgroundImage: `url('assets/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginLeft: '8%' }}>
            <Typography variant="h4" sx={{ fontFamily: "Mukta", fontSize: { xs: '1.5rem', md: '2.5rem' }, color: 'white', fontWeight: 700, marginBottom: '1rem' }}>
              Join us!
            </Typography>
            <Typography variant="body1" sx={{ color: '#CCCCCC', fontSize: { xs: '0.875rem', md: '1rem' }, marginBottom: '1rem' }}>
              Join Fincooper and lead innovations in technical and Product engineering consultancy services
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                height: "50px",
                backgroundColor: "#09A3C6",
                borderRadius: "42px",
                transition: 'background-color 0.5s ease',
                '&:hover': {
                  backgroundColor: "#486284",
                }
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img src='assets/joinus.png' alt='laptop' style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        {Openings.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
            <Cards
              img={item.img}
              title={item.position}
              description={item.experience}
              details={item.apply}
            />
          </Grid>
        ))}
      </Grid>

    </Grid>
  );
};

export default Career;
