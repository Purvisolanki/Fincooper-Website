import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormDialog from './FormDialog';  // Import the FormDialog component

const Cards = ({ img, title, description, details }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: { xs: '100%', sm: '80%' }, mx: 1 }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt={title} sx={{ objectFit: 'cover', height: "200px" }} />
        <CardContent>
          <Typography variant="h6" sx={{ color: "white" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#C8C8C8" }}>
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#DFDFDF", borderRadius: "17px", width: '50%', mx: 'auto' }}>
          <Button variant="body2" sx={{ color: "black", textAlign: 'center' }} onClick={handleClickOpen}>
            Apply Now
            <ArrowForwardIcon />
          </Button>
        </Box>
      </CardActionArea>
      <FormDialog open={open} handleClose={handleClose} />
    </Card>
  );
};

export default Cards;
