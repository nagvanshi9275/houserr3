


import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import homeData from "./homedata";

export default function Getstarted() {
  // Flatten the locations data into a single array of items
  const items = homeData.flatMap(pre => pre.locations);

  // Ensure we only show up to 16 items (4x4)
  const limitedItems = items.slice(0, 16);

  return (
    <Container>
      <Grid container spacing={2}>
        {limitedItems.map((pre1, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card variant="outlined" style={{ height: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
              {pre1.houseImages.length > 0 && (
                <CardMedia
                  component="img"
                  height="140"
                  image={pre1.houseImages[0]} // Show the first image
                  alt={pre1.locationTitle}
                />
              )}
              <CardContent>
                <Box mb={2} display="flex" alignItems="center">
                  <HomeIcon color="primary" />
                  <Typography variant="h6" component="div" style={{ marginLeft: 8 }}>
                    {pre1.locationTitle}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {pre1.locationDescription}
                </Typography>
                <Box mt={2} display="flex" alignItems="center">
                  <InfoIcon color="action" />
                  <Typography variant="body2" color="text.primary" style={{ marginLeft: 8 }}>
                    {pre1.pricing}
                  </Typography>
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                  <PriceChangeIcon style={{ color: '#00796b' }} /> {/* Deep teal color */}
                  <Typography variant="body2" color="text.primary" style={{ marginLeft: 8 }}>
                    Price for 2BHK: ₹{pre1.price2bhk}
                  </Typography>
                </Box>
                <Box mt={1} display="flex" alignItems="center">
                  <PriceChangeIcon style={{ color: '#004d40' }} /> {/* Dark teal color */}
                  <Typography variant="body2" style={{ color: '#004d40', marginLeft: 8 }}>
                    Price for 3BHK: ₹{pre1.price3bhk}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}














