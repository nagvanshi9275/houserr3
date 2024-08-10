import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import homeData from "./homedata";

export default function Citydata() {
  return (
    <Container sx={{ marginTop: 4 }}> {/* Adjust marginTop value as needed */}
      <Grid container spacing={3}>
        {homeData.map((city, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "tween", duration: 0.3 }}>
              <Card sx={{ cursor: "pointer", overflow: "hidden" }}>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "tween", duration: 0.3 }}>
                  <Link to={`/${city.cityName}`}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={city.cityImages}
                      alt={city.cityName}
                    />
                  </Link>
                </motion.div>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {city.cityName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {city.cityDescription}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
