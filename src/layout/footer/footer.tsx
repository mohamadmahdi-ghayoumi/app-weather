import React from 'react';
import { Container, Typography } from '@mui/material';


const Footer = () => {

  return (
    <footer >
      <Container
      sx={{bgcolor:"secondary.light" , width: 1}}>
        <Typography variant="h6" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Your text here...
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;