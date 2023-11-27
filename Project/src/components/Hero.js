// Hero.js
import React from 'react';
import { Typography, Button, Container, Grid, Box } from '@mui/material';

const Hero = () => {
  const heroStyle = {
    background: 'url("https://img.freepik.com/free-photo/young-asian-businesswoman-manager-wearing-face-mask-warehouse-using-digital-tablet-checking-inventory_7861-2913.jpg?w=1380&t=st=1701062224~exp=1701062824~hmac=86492e4e76339dd86240ebf45831da147510c99dba0c8eef53dae8e6fdf46757")', // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '210px 0', // Adjust the padding to reduce the height
  };

  const buttonStyle = {
    marginTop: '20px',
    background:'#566573',

  };

  const boxStyle = {
    background: '#D0D3D4', // Gradient color
    padding: '70px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'white', // Text color
  };
  const imageSectionStyle = {
    background: 'white', // Gradient color
    padding: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'black', // Text color
  };

  const imageStyle = {
    maxWidth: '90%',
    borderRadius: '10px',
  };

  return (
    <>
      <Box sx={heroStyle}>
        <Container>
          <Typography variant="h2" component="div" gutterBottom>
           
          </Typography>
          <Typography variant="h5" component="div" paragraph>
          
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={buttonStyle}>
            Get Started
          </Button>
        </Container>
      </Box>

      <Grid container spacing={4} sx={imageSectionStyle}>
        <Grid item xs={12} md={6}>
          <img src="https://resources.useready.com/wp-content/uploads/2020/08/Side-By-Side-Bar-Chart-In-Tableau-13.png" alt="SmallImage" style={imageStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
           BETTER CHARTING
           SMARTER MOVING
          </Typography>
          <Typography variant="body1" paragraph>
          Whether you're an active trader, diligent investor or simply managing your retirement accounts, StockCharts has everything you need to plan, organize and execute any investing system.
          </Typography>
        </Grid>
      </Grid>

      
      <Container sx={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          <Grid item xs={11} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h6" component="div" gutterBottom>
               ORDER MANAGEMENT
              </Typography>
              <Typography variant="body1" component="div">
               Handle all your sales and purchases activities, manage invoices and bills,track payments.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h6" component="div" gutterBottom>
                STOCK TRACKING
              </Typography>
              <Typography variant="body1" component="div">
You can keep track of spare parts, saleable items, and even expiry dates with the serial and batch tracking feature of Zoho Inventory.

              </Typography>
            </Box>
          </Grid>

          <Grid item sx={12} sm={4}>
            <Box sx={boxStyle}>
              <Typography variant="h6" component="div" gutterBottom>
                REPORT
              </Typography>
              <Typography variant="body1" component="div">
              Know your inventory aging, vendor payments, sales details and inventory valuation from a range of reports which can be generated. </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hero;