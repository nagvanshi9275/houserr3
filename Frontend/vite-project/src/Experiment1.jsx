

import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Container, 
  CircularProgress 
} from '@mui/material';
import { styled } from '@mui/system';

// Styled components for the Card and CardMedia
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const Experiment1 = ({ gmail }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch user data from the API
  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://houserr3-3.onrender.com/api/users/getdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: gmail }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      setUserData(data.userdata);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchUserData();
  }, []); 






   
  useEffect(() => {
    if (userData) {
      console.log("User Data:", userData);
    }
  }, [userData]);

  return (
    <Container maxWidth="lg">
      {}
      {loading && (
        <CircularProgress size={24} color="inherit" sx={{ my: 2 }} />
      )}

      {/* Display error message if there's an error */}
      {error && (
        <Typography color="error" sx={{ my: 2 }}>
          Error: {error}
        </Typography>
      )}

      {/* Display user data if available */}
      {userData && (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            User Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {userData.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: {userData.phone}
          </Typography>

          <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 2 }}>
            User Images
          </Typography>
          <Grid container spacing={3}>
            {userData.image.map((imgSrc, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <StyledCard>
                  <StyledCardMedia
                    image={imgSrc}
                    title={`User Image ${index + 1}`}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Location: {userData.location[index]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${userData.pricing[index]}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Experiment1;



















































































