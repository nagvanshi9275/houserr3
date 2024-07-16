


import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button
} from '@mui/material';
import { Home, Person, LocationOn } from '@mui/icons-material';
import homeData from './homedata';

// Function to return image URL from homedata
const getImageUrl = (url) => url;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export default function House() {
  const { city: cityName, location: locationTitle } = useParams();
  
  const cityData = homeData.find((c) => c.cityName === cityName);
  const locationData = cityData?.locations.find((l) => l.locationTitle === locationTitle);

  if (!cityData || !locationData) {
    return (
      <Container>
        <Typography variant="h4" align="center" mt={4}>
          Location not found
        </Typography>
      </Container>
    );
  }

  const show = locationData.houses.map((pre, index) => (
    <Card key={index} elevation={3} sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {pre.houseTitle}
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Home color="success"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Pricing" secondary={pre.housePricing} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOn color="warning"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Address" secondary={pre.address} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person  color="primary"/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Resident Manager" secondary={pre.residentManager} />
          </ListItem>
        </List>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            House Images
          </Typography>
          <Grid container spacing={2}>
            {pre.houseImages.map((pr1, index1) => (
              <Grid item xs={12} sm={6} md={4} key={index1}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={getImageUrl(pr1)}
                    alt={`${pre.houseTitle} image ${index1 + 1}`}
                    sx={{ borderRadius: 1 }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" sx={{ width: '100%', maxWidth: '600px' }}>
            Book
          </Button>
        </Box>
      </CardContent>
    </Card>
  ));

  return (
    <Container maxWidth="lg">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="h3" component="h1" gutterBottom mt={4}>
          {locationData.locationTitle}
        </Typography>
        <Typography variant="body1" paragraph>
          {locationData.locationDescription}
        </Typography>
        {show}
      </motion.div>
    </Container>
  );
}






