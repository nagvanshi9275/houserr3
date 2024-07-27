



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  IconButton, 
  CardActions, 
  TextField,
  InputAdornment,
  Paper,
  Box
} from "@mui/material";
import { ArrowForward, Search, Clear } from "@mui/icons-material";
import homeData from "./homedata";
import { Button } from '@mui/material';
import { useNavigate, Link } from "react-router-dom";

export default function Citydetail({ message, gmail }) {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const city = homeData.find((city) => city.cityName === cityName);

  const[photo, setphoto] = useState()

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(city ? city.locations : []);
  const [imageIndexes, setImageIndexes] = useState(
    city ? city.locations.map(() => 0) : []
  );

  useEffect(() => {
    if (city) {
      const filtered = city.locations.filter((location) =>
        location.locationTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLocations(filtered);
    }
  }, [searchQuery, city]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleNextImage = (locationIndex) => {
    setImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[locationIndex] = (newIndexes[locationIndex] + 1) % city.locations[locationIndex].houseImages.length;
      return newIndexes;
    });
  };

  async function Buy(location) {
    const formData = {
      product: city.cityName,
      location: location.locationTitle,
      pricing2Bhk: location.price2bhk,
      pricing3Bhk: location.price3bhk,
      name: message,
      email: gmail
    };

    try {
      const response = await fetch('http://localhost:4000/api/users/productdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log(message, "your home are added soon our team reachout to you");

        console.log(location.houseImages[0])

        setphoto(location.houseImages[0])
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!city) return <div>City not found</div>;

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {city.cityName}
        </Typography>
        <Typography variant="body1" paragraph>
          {city.cityDescription}
        </Typography>
      </Box>
      
      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search locations"
          value={searchQuery}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton onClick={handleClearSearch} edge="end">
                  <Clear />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, locationIndex) => (
            <Grid item xs={12} sm={6} md={4} key={locationIndex}>
              <Card style={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={location.houseImages[imageIndexes[locationIndex]]}
                  alt={location.locationTitle}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {location.locationTitle}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {location.locationDescription}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    {location.pricing}
                  </Typography>
                  <Link to={`/house/${city.cityName}/${location.locationTitle}`}>
                    <Button onClick={() => Buy(location)} variant="contained" color="warning">
                      Buy NOW!
                    </Button>
                  </Link>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="next image"
                    onClick={() => handleNextImage(locationIndex)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      zIndex: 1,
                    }}
                  >
                    <ArrowForward />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No locations found. Try a different search term.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}








