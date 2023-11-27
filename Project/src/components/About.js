import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';

const About = () => {
  return (
    <>
    
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
        <Grid item xs={12} sm={4}>
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />
          <Typography variant="h5">Stock Management</Typography><br />
          <Typography variant="body1">
          Everyone knows stock out means money in, but without a clear view of your goods from initial receipt to ship date, your company’s largest asset could be losing you money.
          </Typography>
        </Grid>

        
        <Grid item xs={12} sm={5}>
          <img src="https://www.kindpng.com/picc/m/567-5674919_inventory-management-inventory-management-system-png-transparent-png.png" alt="Your Image" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>


      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px', backgroundColor: '#ff9800' }}>
        {/* Left side with text */}
        <Grid item xs={12} sm={4} style={{ padding: '20px', backgroundColor: 'inherit' }}>
          <Typography variant="h5" style={{ color: 'white' }}><h3>What We Do</h3></Typography>
          <Typography variant="body1" style={{ color: 'white' }}>
            <h3>Inventory valuation</h3>Supports first-in, first out (FIFO), average cost (AVCO), and standard price costing methods.
           .<br></br>

            <h2>Integrations</h2>

            <ul>
              <li>
                <h4>Returns</h4>Integrate with the Sales app to generate display return instructions, and printable barcode of the order and defined return location in the Customer Portal. Keeps the customer informed with timestamps and return status, right on the Customer Portal.</li>
              <li>
                <h4>Calculate Shipping</h4>
                Integrate with third-party shipping carriers to calculate cost of shipping based on product weights, and customer address.
                </li>
              <li>
                <h4>Blanket Orders</h4>
                Get the best prices for materials by scheduling recurring orders with pre-defined vendors, order quantities, and expected arrival dates. (Integration with Purchase app)
              </li>
              <li>
                <h4>Quality Checks</h4>
                Set up recurring inspection checks at any point of your warehouse flow: reception, returns, subcontracting, etc.
            </li>
              <li>
                <h4>Rental</h4>
                Manage pickups, packing, shipping, and return of rental products, directly in Inventory.
                 </li>
              
            </ul>
           </Typography>
        </Grid>

        {/* Right side with image */}
        <Grid item xs={12} sm={4}>
          {/* Your image component goes here */}
          <img src="https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Your Image" style={{ width: '100%', height: 'auto', backgroundColor: 'inherit' }} />
        </Grid>
      </Grid>
      
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '40px' }}>
  
        <Grid item xs={12} sm={4}>
          
          <Divider style={{ margin: '0 0 10px 0', backgroundColor: 'orange' }} />

          
          
        </Grid>
        </Grid>
    </>
  );
};

export default About;