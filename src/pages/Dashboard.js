import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import About from './About';
import Typewriter from '../components/Typewriter';
// import { motion } from "framer-motion";

const HomeContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: "#09A3C6",
  borderRadius: '0px 0px 90px 90px',
  height: "630px",
  padding: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    borderRadius: '0px 0px 60px 60px',
    padding: theme.spacing(2),
    height: "800px"
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0px 0px 30px 30px',
    padding: theme.spacing(1),
    height: "650px"
  },
}));

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "48.41px",
  marginTop: "15%",
  marginLeft: "8%",
  height: "150px",
  color: "#fff",
  [theme.breakpoints.down('md')]: {
    fontSize: "30px",
    lineHeight: "38px",
    marginTop: "10%",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "24px",
    lineHeight: "30px",
    marginTop: "8%",
    marginBottom:0
  },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Inter",
  fontWeight: 300,
  fontSize: "18px",
  lineHeight: "21.78px",
  marginLeft: "8%",
  // marginTop: "3%",
  color: "#fff",
  
  [theme.breakpoints.down('md')]: {
    fontSize: "16px",
    lineHeight: "20px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "14px",
    lineHeight: "18px",
    marginTop: "0%",
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '0px 0px 90px 90px',
  [theme.breakpoints.down('md')]: {
    borderRadius: '0px 0px 60px 60px',
    height:"350px"
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '0px 0px 30px 30px',
    height:"280px"
  },
}));

export default function RowAndColumnSpacing() {
  return (
    <>
      <HomeContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledTypography1>
              Empowering Futures through <Typewriter text="Innovative Finance Solutions" delay={100} infinite />
            </StyledTypography1>
            <StyledTypography2>
              At Fin Coopers Tech we specialize in delivering cutting-edge finance solutions driven by the latest technology and trends. Our mission is to redefine the landscape of financial services through innovation, offering our clients unparalleled opportunities to thrive in a dynamic marketplace.
            </StyledTypography2>
            <Button
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                appearance: 'button',
                backgroundColor: '#000',
                backgroundImage: 'none',
                border: '1px solid #000',
                borderRadius: '0px',
                boxShadow: '#fff 4px 4px 0 0, #000 4px 4px 0 1px',
                boxSizing: 'border-box',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: 'ITCAvantGardeStd-Bk, Arial, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                marginLeft: "8%",
                marginTop: "8%",
                padding: {
                  xs: '12px 24px',
                  sm: '12px 32px',
                  md: '12px 40px',
                  lg: '12px 50px'
                },
                textAlign: 'center',
                textTransform: 'none',
                touchAction: 'manipulation',
                userSelect: 'none',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
                '&:focus': {
                  textDecoration: 'none',
                },
                '&:hover': {
                  textDecoration: 'none',
                },
                '&:active': {
                  boxShadow: 'rgba(0, 0, 0, .125) 0 3px 5px inset',
                  outline: 0,
                },
                '&:not([disabled]):active': {
                  boxShadow: '#fff 2px 2px 0 0, #000 2px 2px 0 1px',
                  transform: 'translate(2px, 2px)',
                },
                marginBottom: {
                  xs: 0,
                },
              }}
            >
              Explore
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{height:"auto"}}>
      
            <StyledImage src="assets/HomeImg.gif" alt="Your GIF" />
          </Grid>
        </Grid>
      </HomeContainer>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sx={{ marginTop: "5%", height: "auto" }}>
          
            <img
              src="assets/photo.png"
              alt="Your png"
              style={{
                marginLeft: "10%",
                width: '65%',
                height: 'auto',
              }}
            />
    
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: 'relative', height: "auto" }}>
          <img
            src='assets/circle.png'
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              objectFit: 'cover',
              opacity: 1,
            }}
            alt="Background"
          />
          <Box sx={{ marginTop: { xs: "20%", md: "15%" } }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: { xs: "24px", sm: "30px", md: "40px" },
                lineHeight: { xs: "30px", sm: "38px", md: "48.41px" },
                marginLeft: "8%",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-5px",
                  width: "70%",
                  borderBottom: "3px solid",
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: "-5px",
                  width: "50%",
                  borderBottom: "3px dotted",
                },
              }}
            >
              Our <Typewriter text="Mission" delay={100} infinite />
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 300,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                lineHeight: { xs: "18px", sm: "20px", md: "21.78px" },
                marginLeft: "8%",
                marginTop: "12%",
              }}
            >
              We understand that in today's fast-paced world, staying ahead means embracing innovation. That's why we leverage the most advanced technological tools and strategies to tailor financial solutions that meet the unique needs of each client. Whether you're a startup looking to secure funding or an established business seeking to optimize cash flow, our expertise and commitment to excellence ensure that you receive the best-in-class service and support.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <About />
    </>
  );
}
