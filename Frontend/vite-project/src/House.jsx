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
  DialogContent
} from '@mui/material';
import { Home, Person, LocationOn } from '@mui/icons-material';
import homeData from './homedata';

// Function to return image URL from 
const getImageUrl = (url) => url;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const popupVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export default function House({ message, gmail, phone }) {
  const { city: cityName, location: locationTitle } = useParams();
  const navigate = useNavigate();

  // Local state to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Local state to manage popup visibility
  const [popupVisible, setPopupVisible] = useState(false);

  // Simulated check for authentication
  useEffect(() => {
    // Here you would normally check the authentication status from your app's global state, context, or an API
    setIsAuthenticated(!!message && !!gmail && !!phone); // Simple check for non-empty user data
  }, [message, gmail, phone]);

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

  async function Booked() {
    if (isAuthenticated) {
      try {
        const response = await fetch('http://localhost:4000/api/users/confirmed', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            city: cityData.cityName,
            location: locationData.locationTitle,
            pricing: locationData.price2bhk,
            name: message,
            email: gmail,
            phone: phone,
            image: locationData.houseImages[0]
           

           

          
          })
        });

        const data = await response.json();

        if (response.ok) {
          console.log(`${message}, your home is now confirmed. Our team will reach out to you soon.`);
          console.log('Response Data:', data); // Log response data for debugging
          setPopupVisible(true); // Show the popup on successful booking

         navigate('/button')

        



        } else {
          console.error('Response Error:', data); // Log any errors from the response
        }
      } catch (error) {
        console.error('Fetch Error:', error.message); // Log network errors
      }
    } else {
      console.warn("Please register or log in first.");
      navigate('/blog'); // Navigate to a registration or login page
    }
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
                <Home color="success" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Pricing" secondary={pre.housePricing} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOn color="warning" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Address" secondary={pre.address} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person color="primary" />
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
          <Button onClick={Booked} variant="contained" color="warning" sx={{ width: '100%', maxWidth: '600px' }}>
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

      {/* Popup for booking confirmation */}
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











