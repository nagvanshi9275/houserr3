

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
  Box,
  Button
} from "@mui/material";
import { ArrowForward, Search, Clear } from "@mui/icons-material";
import homeData from "./homedata";

export default function Citydetail({ message, gmail }) {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const city = homeData.find((city) => city.cityName === cityName);

  const [photo, setPhoto] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(city ? city.locations : []);
  const [imageIndexes, setImageIndexes] = useState(city ? city.locations.map(() => 0) : []);
  const [priceRange, setPriceRange] = useState("");

  // Filter locations whenever city, search query, or price range changes
  useEffect(() => {
    filterLocations();
  }, [searchQuery, priceRange, city]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const filterLocations = () => {
    if (!city) return;

    const filtered = city.locations.filter((location) => {
      const matchQuery = location.locationTitle.toLowerCase().includes(searchQuery.toLowerCase());

      if (!priceRange) return matchQuery;

      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      
      // Logging to debug the filtering logic
      console.log(`Filtering ${location.locationTitle}:`, {
        locationPrice: location.price2bhk,
        minPrice,
        maxPrice,
        matchPrice: location.price2bhk >= minPrice && location.price2bhk <= maxPrice
      });

      const matchPrice = location.price2bhk >= minPrice && location.price2bhk <= maxPrice;

      return matchQuery && matchPrice;
    });

    setFilteredLocations(filtered);
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
      name: message,
      email: gmail
    };

    try {
      const response = await fetch('https://houserr3-3.onrender.com/api/users/productdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log(message, "your home will be added soon. Our team will reach out to you.");

        console.log(location.houseImages[0]);

        setPhoto(location.houseImages[0]);
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

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
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

        <Box ml={2}>
          <TextField
            select
            label="select price"
            value={priceRange}
            onChange={handlePriceRangeChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value="">select price</option>
            <option value="200000-300000">200000-300000</option>
            <option value="450000-500000">450000-500000</option>
            <option value="900000-1000000">900000-1000000</option>
          </TextField>
        </Box>
      </Box>

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
                    2BHK: {location.price2bhk}
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
















