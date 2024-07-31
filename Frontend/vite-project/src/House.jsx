

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  Button,
  Dialog,
  DialogContent,
} from '@mui/material';
import { Home, Person, LocationOn } from '@mui/icons-material';
import homeData from './homedata';

const getImageUrl = (url) => url;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const popupVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function House({ message, gmail, phone }) {
  const { city: cityName, location: locationTitle } = useParams();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!message && !!gmail && !!phone);
  }, [message, gmail, phone]);

  const cityData = homeData.find((c) => c.cityName === cityName);
  const locationData = cityData?.locations.find((l) => l.locationTitle === locationTitle);

  // Debugging: Check if cityData and locationData are correctly retrieved
  if (!cityData) {
    console.error('City not found:', cityName);
  } else {
    console.log('City Data:', cityData);
  }

  if (!locationData) {
    console.error('Location not found:', locationTitle);
  } else {
    console.log('Location Data:', locationData);

    // Ensure that nearbyProperties exists and log it
    if (!locationData.houses || locationData.houses.length === 0) {
      console.error('Houses are not available');
    } else {
      console.log('Houses:', locationData.houses);

      // Check nearbyProperties without looping
      const firstHouse = locationData.houses[0];
      if (firstHouse && firstHouse.nearbyProperties && firstHouse.nearbyProperties.length > 0) {
        console.log('Nearby Properties of First House:', firstHouse.nearbyProperties);
      } else {
        console.error('No nearby properties available for the first house');
      }
    }
  }

  if (!cityData || !locationData) {
    return (
      <Container>
        <Typography variant="h4" align="center" mt={4}>
          Location not found
        </Typography>
      </Container>
    );
  }

  async function Booked(nearbyProperties) {
    console.log('Nearby Properties:', nearbyProperties); // Log the nearby properties

    if (isAuthenticated) {
      try {
        const response = await fetch('https://houserr3-3.onrender.com/api/users/confirmed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            city: cityData.cityName,
            location: locationData.locationTitle,
            pricing: locationData.price2bhk,
            name: message,
            email: gmail,
            phone: phone,
            image: locationData.houseImages[0],
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log(
            `${message}, your home is now confirmed. Our team will reach out to you soon.`
          );
          console.log('Response Data:', data);
          setPopupVisible(true);
        } else {
          console.error('Response Error:', data);
        }
      } catch (error) {
        console.error('Fetch Error:', error.message);
      }
    } else {
      console.warn('Please register or log in first.');
      navigate('/login');
    }
  }

  const show = locationData.houses.map((house, index) => (
    <Card key={index} elevation={3} sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {house.houseTitle}
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Home color="success" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Pricing" secondary={house.housePricing} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOn color="warning" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Address" secondary={house.address} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person color="primary" />
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
            {house.houseImages.map((image, index1) => (
              <Grid item xs={12} sm={6} md={4} key={index1}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={getImageUrl(image)}
                    alt={`${house.houseTitle} image ${index1 + 1}`}
                    sx={{ borderRadius: 1 }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => Booked(house.nearbyProperties)} // Pass the nearby properties directly
            variant="contained"
            color="warning"
            sx={{ width: '100%', maxWidth: '600px' }}
          >
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

      <Dialog
        open={popupVisible}
        onClose={() => setPopupVisible(false)}
        aria-labelledby="booking-confirmation-dialog"
        maxWidth="xs"
      > 
        <DialogContent>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={popupVariants}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Thank you for booking!
            </Typography>
            <Typography variant="body1" align="center">
              {`${message}, your home is now confirmed. Our team will reach out to you soon.`}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPopupVisible(false)}
              >
                Close
              </Button>
            </Box>
          </motion.div>
        </DialogContent>
      </Dialog>
    </Container>
  );
}









