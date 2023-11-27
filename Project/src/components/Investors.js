
import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';

const investorsData = [
  // ... (same as your provided data)
  { name: 'John Doe', role: 'Founder, ABC Ventures', imageUrl: 'https://images-workbench.99static.com/d9dYvZVmIlGtANkYFC5zmR3twKA=/99designs-contests-attachments/96/96172/attachment_96172747' },
  { name: 'Jane Smith', role: 'Managing Partner, XYZ Capital', imageUrl: 'https://images-workbench.99static.com/qCV_ot9cgfi2f_a1PtN8laa_Ppk=/99designs-contests-attachments/98/98386/attachment_98386463' },
  { name: 'Bob Johnson', role: 'CEO, Acme Investments', imageUrl: 'https://images-workbench.99static.com/vSCfb5FqbmnB1FUzxR41jLOGa_M=/99designs-contests-attachments/133/133618/attachment_133618429' },
  { name: 'MV clerk', role: 'CEO, Clerks and Marine', imageUrl: 'https://images-workbench.99static.com/FoSSP6pHwIE_TCy58ptGoPT8HHM=/99designs-contests-attachments/88/88106/attachment_88106450' },
  { name: 'Robert Hook', role: 'CEO, Prime Investments', imageUrl: 'https://images-workbench.99static.com/hokFtWeNfSiAvU4g4H5q2qR_j1E=/99designs-contests-attachments/109/109508/attachment_109508038' },
  { name: 'Subramani', role: 'Founder,CapitalContractors,INC', imageUrl: 'https://images-workbench.99static.com/ZTUeZhbc-hnFWdTeVqNZnsYx28c=/99designs-contests-attachments/4/4119/attachment_4119023' },
  { name: 'Levis Wood', role: 'CEO, 4 Arrows North LLC', imageUrl: 'https://images-workbench.99static.com/Xf0_2daUbyX00eX5CwofD_GyarE=/http://s3.amazonaws.com/projects-files/38/3871/387199/ad6fc54d-d735-4d94-8486-bad8117244c7.jpg' },
  { name: 'David Hunt', role: 'Managing , Corilon Partners', imageUrl: 'https://images-workbench.99static.com/KRA9UYFOVQyKYe2KzuIDYEEd2yY=/http://s3.amazonaws.com/projects-files/38/3879/387902/12ea69e9-8c54-4579-aa09-0e65dae025a9.jpg' },
  { name: 'Jermiah Fisher', role: 'Founder,Next Invest', imageUrl: 'https://images-workbench.99static.com/up1B1js5CqsUW5PpiQYk9hVYRUU=/99designs-contests-attachments/51/51242/attachment_51242639' },
  { name: 'Cameron', role: 'Managing, Medusa', imageUrl: 'https://images-workbench.99static.com/QsPT2OEStdHz22OsTjQDome4ZZY=/http://s3.amazonaws.com/projects-files/45/4546/454610/81128c61-b901-4004-acee-1c100b94e9e2.jpg' },
  { name: 'Peter Kavinsky', role: 'Founder,Igneous Investor', imageUrl: 'https://img.freepik.com/premium-vector/minimal-logo-design-collection_666656-139.jpg?w=740' },
  { name: 'Miller', role: 'Managing, CityRise Accounting', imageUrl: 'https://img.freepik.com/free-vector/gradient-accounting-logo-template_23-2148867917.jpg?w=740&t=st=1701077598~exp=1701078198~hmac=98a3dda8664210d84db093bbe2a7556735840a6e9610e1abbd53a6fcd4f94941' },
  // Add more investors as needed
];

const Investors = () => {
  const [showAllInvestors, setShowAllInvestors] = useState(false);
  const visibleInvestors = showAllInvestors ? investorsData : investorsData.slice(0, 6);

  return (
    <div>
      <Typography variant="h5" gutterBottom marginTop={8} textAlign={'center'}>
        COMPANIES
      </Typography>
      <Grid container spacing={2}>
        {/* Image on the left */}
        <Grid item xs={12} md={6}>
          
        </Grid>

       
      </Grid>
      <br></br>

      <Grid container spacing={3}>
        {visibleInvestors.map((investor, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <img src={investor.imageUrl} alt={`Investor ${index + 1}`} width="80" height="80" style={{ borderRadius: '50%' }} />
              <Typography variant="h6" gutterBottom>
                {investor.name}
              </Typography>
              <Typography color="textSecondary">{investor.role}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <br></br>
      <br></br>

      {!showAllInvestors && (
        <div style={{ position:"fixed", bottom: 45, right: 20 }}>
          <Button variant="contained" color="primary" onClick={() => setShowAllInvestors(true)}>
            View More
          </Button>
          <br>
          </br>
        </div>
      )}
    </div>
  );
};

export default Investors;

