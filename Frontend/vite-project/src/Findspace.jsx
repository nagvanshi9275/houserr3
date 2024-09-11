
import React from "react";
import { useNavigate } from "react-router-dom";
import items from "./Finddata"; // Ensure this path is correct
import { Card, CardMedia, CardContent, Typography, Grid, Container } from "@mui/material";

export default function Findspace() {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/item/${encodeURIComponent(name)}`);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Explore Our Collection
      </Typography>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card onClick={() => handleCardClick(item.name)}>
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








