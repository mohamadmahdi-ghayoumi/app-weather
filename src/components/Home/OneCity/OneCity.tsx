import { Box, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

type TypeProps = { icon: string, city: string, country: string, temp: string };

function OneCity({ icon, city, country, temp }: TypeProps) {
  return (
    <Grid
      item
      xs={2}
      sx={{
        opacity: 0.8,
        bgcolor: "primary.main",
        minWidth: 200,
        maxWidth: "100%", 
        height: 300, 
        margin: { xs: "10px", sm: "auto" },
        marginTop: "20px",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",  
      }}
    >
      <Box>
        <iframe width={"100%"} src={icon} style={{ height: 200, border: "none" }}></iframe>  
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={"white"}
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
          }}
        >
          {city}, {country}
        </Typography>
        <Typography variant="body2" color={"white"}>
          Temperature: {temp}°C
        </Typography>
      </CardContent>
    </Grid>
  );
}

export default OneCity;
