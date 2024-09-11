

import React from "react";
import { useParams } from "react-router-dom";
import items from "./Finddata"; // Ensure this path is correct
import { Container, Typography, Grid } from "@mui/material";

import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CarRentalIcon from '@mui/icons-material/CarRental';
import WeekendIcon from '@mui/icons-material/Weekend';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ItemDetail() {
  const { name } = useParams();
  const item = items.find(item => item.name === decodeURIComponent(name));

  if (!item) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Item not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {item.name}
      </Typography>
      <img 
        src={item.image} 
        alt={item.name} 
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} 
      />
      <Typography variant="h6" component="p" gutterBottom>
        {item.description}
      </Typography>
      <Typography variant="h6" color="primary">
        ₹{item.price.toLocaleString()}
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: "16px" }}>
        <Grid item xs={6} sm={4} textAlign="center">
          <BedIcon fontSize="large" />
          <Typography variant="body1">{item.home}</Typography>
        </Grid>
        <Grid item xs={6} sm={4} textAlign="center">
          <BathtubIcon fontSize="large" />
          <Typography variant="body1">{item.Bath}</Typography>
        </Grid>
        <Grid item xs={6} sm={4} textAlign="center">
          <WeekendIcon fontSize="large" />
          <Typography variant="body1">{item.furnised}</Typography>
        </Grid>
        <Grid item xs={6} sm={4} textAlign="center">
          <PropaneTankIcon fontSize="large" color="error"/>
          <Typography variant="body1">{item.Gas}</Typography>
        </Grid>
        <Grid item xs={6} sm={4} textAlign="center">
          <img 
            src="https://i.postimg.cc/rFwsn6Y5/home.png" 
            alt="Home Icon" 
            style={{ width: "30px", height: "30px" }} 
          />
          <Typography variant="body1">{item.almirah}</Typography>
        </Grid>
        <Grid item xs={6} sm={4} textAlign="center">
          <LocationOnIcon fontSize="large" />
          <Typography variant="body1">Location</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}








