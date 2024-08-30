import React from "react";
import items from "./Finddata"; // Make sure this path is correct
import { Card, CardMedia, CardContent, Typography, Grid, Container } from "@mui/material";

export default function Findspace() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Explore Our Collection
      </Typography>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ₹{item.price.toLocaleString()} 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
