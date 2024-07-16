
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
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';
import { Home, Person, LocationOn } from '@mui/icons-material';
import homeData from './homedata';

const getImageUrl = (imageName) => `/images/${imageName}`; // Assuming images are in public/images folder

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

  return (
    <Container maxWidth="lg">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="h3" component="h1" gutterBottom mt={4}>
          {locationData.locationTitle}
        </Typography>
        <Typography variant="body1" paragraph>
          {locationData.locationDescription}
        </Typography>

        {locationData.houses.map((house, index) => (
          <Card key={index} elevation={3} sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {house.houseTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {house.houseDescription}
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Home color="success"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Pricing" secondary={house.housePricing} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOn />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={house.address} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Resident Manager" secondary={house.residentManager} />
                </ListItem>
              </List>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  House Images
                </Typography>
                <Grid container spacing={2}>
                  {house.houseImages.map((image, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={getImageUrl(image)}
                          alt={`${house.houseTitle} image ${idx + 1}`}
                          sx={{ borderRadius: 1 }}
                        />
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Nearby Properties
              </Typography>
              <Grid container spacing={3}>
                {house.nearbyProperties.map((property, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          {property.propertyTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {property.propertyDescription}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                          <Grid container spacing={1}>
                            {property.propertyImages.map((img, i) => (
                              <Grid item xs={6} key={i}>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                  <CardMedia
                                    component="img"
                                    height="100"
                                    image={getImageUrl(img)}
                                    alt={`${property.propertyTitle} image ${i + 1}`}
                                    sx={{ borderRadius: 1 }}
                                  />
                                </motion.div>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Container>
  );
}




