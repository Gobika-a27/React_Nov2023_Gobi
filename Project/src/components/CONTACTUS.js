// ContactPage.js

import React from 'react';
import { Container, Grid, TextField, Button,ListItemIcon,ListItem,ListItemText} from '@mui/material';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const CONTACTUS = () => {
  return (
    <Container  style={{ marginTop: '40px' }} alignItems={'center'}>
      
        
      <Grid container spacing={1} alignItems="center" >
      
        <Grid item xs={12} sm={6}>
            <div className='cont'>
          <img
            src="https://img.freepik.com/free-vector/get-touch-concept-illustration_114360-6504.jpg?size=626&ext=jpg&ga=GA1.1.1862044828.1700807955&semt=sph" // Replace with your image URL
            alt="Contact"
            style={{ width: '100%', borderRadius: '8px',textAlign:"center" }}
          />
          </div>
        </Grid>

        {/* Right side - Contact Details and Form */}
        <Grid item xs={12} sm={6}>
          <div style={{ padding: '20px', borderRadius: '8px' }}>
            {/* Form */}
            <form>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="I am not a robot."/>
              <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
                Submit
              </Button>
              <br></br>

            </form>
            
          </div>
        </Grid>
            <ListItem>
              <ListItemIcon>
                   <PrivacyTipRoundedIcon/>
                
              </ListItemIcon>
              <ListItemText primary=" We will handle your personal data as described in our Privacy Policy, to answer your question and provide information about our products and services." />
            </ListItem>
        
 
              
           
        
      </Grid>
    </Container>
  );
};

export default CONTACTUS;