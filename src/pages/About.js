import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Typewriter from '../components/Typewriter';

const About = () => {
    return (
        <Grid container rowSpacing={1} mt={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mb={7}>
            <Grid item xs={12} md={6} >
                <Typography
                    sx={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "40px",
                        lineHeight: "48.41px",
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
                    Abo<Typewriter text="ut Us.." delay={100} infinite />
                </Typography>
                <Typography sx={{
                    font: "inter",
                    fontWeight: 400,
                    fontSize: "40px",
                    lineHeight: "48.41px",
                    marginLeft: "8%",
                    marginTop: "11%",
                }}>Empowering
                    Business Through
                    Financial Innovation</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ position: 'relative',marginTop: "9%", }}>

                <Typography sx={{
                    font: "inter",
                    fontWeight: 300,
                    fontSize: "18px",
                    lineHeight: "21.78px",
                    marginLeft: "8%",
                  
                }}> We understand that in today's fast-paced world, staying ahead means embracing innovation. That's why we leverage the most advanced technological tools and strategies to tailor financial solutions that meet the unique needs of each client.

                </Typography>
                <Link style={{ color: "#09A3C6", fontWeight: 600, marginLeft: "8%", }}>learn More About us  <KeyboardArrowRightOutlinedIcon /></Link>
            </Grid>
        </Grid>
    )
}

export default About