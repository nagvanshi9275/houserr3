import React, { useState } from 'react';
import homeData from './homedata';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Container, Grid, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export default function Citydata() {
  const [imageIndexes, setImageIndexes] = useState(
    homeData.map(city => city.locations.map(() => 0))
  );

  const handleNextImage = (cityIndex, locationIndex) => {
    setImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[cityIndex][locationIndex] = (newIndexes[cityIndex][locationIndex] + 1) % homeData[cityIndex].locations[locationIndex].houseImages.length;
      return newIndexes;
    });
  };

  return (
    <Container>
      {homeData.map((city, cityIndex) => (
        <div key={cityIndex}>
          <Typography variant="h4" component="h2" gutterBottom>{city.cityName}</Typography>
          <Typography variant="body1" paragraph>{city.cityDescription}</Typography>
          <Grid container spacing={3}>
            {city.locations.map((location, locationIndex) => (
              <Grid item xs={12} sm={6} md={4} key={locationIndex}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={location.houseImages[imageIndexes[cityIndex][locationIndex]]}
                    alt={location.locationTitle}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3">{location.locationTitle}</Typography>
                    <Typography variant="body2" color="textSecondary">{location.locationDescription}</Typography>
                    <Typography variant="body1" color="textPrimary">{location.pricing}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => handleNextImage(cityIndex, locationIndex)} aria-label="next image">
                      <ArrowForward />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
}
