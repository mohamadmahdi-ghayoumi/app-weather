import React from 'react';
import { Box, Container, Typography } from '@mui/material';


const Footer = () => {

  return (
    <footer >
      <Box 
      sx={{bgcolor:"secondary.light" , position:"fixed" , bottom:0 , width:1 }}>
        <Typography variant="h6" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Your text here...
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;