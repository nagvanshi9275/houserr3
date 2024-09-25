import React, { useState, useEffect } from 'react';
import { IconButton, TextField, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import homeData from './homedata'; // Import your homeData from data.js

const ResponsiveVideo = ({ src }) => {
  const [placeholders, setPlaceholders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [filteredData, setFilteredData] = useState([]); // Initially empty filteredData

  useEffect(() => {
    setPlaceholders(['Search location', 'Find your area']);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === '') {
      setFilteredData([]); // If search term is empty, clear the filtered data
    } else {
      // Filter the homeData based on the locationTitle or cityName
      const filtered = homeData.map(city => ({
        ...city,
        locations: city.locations.filter(location =>
          location.locationTitle.toLowerCase().includes(value)
        )
      })).filter(city => city.locations.length > 0); // Only keep cities that have matching locations

      setFilteredData(filtered);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          marginTop: '-30px',
          padding: '0',
        }}
      >
        <video
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
          }}
        >
          <TextField
            variant="outlined"
            placeholder={placeholders[currentIndex]}
            value={searchTerm}
            onChange={handleSearchChange} // Handle search input
            InputProps={{
              endAdornment: (
                <IconButton
                  sx={{
                    padding: '0 10px',
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: '25px',
                    height: '40px',
                    width: '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '@media (max-width: 768px)': {
                      height: '45px',
                      width: '100px',
                    },
                    '@media (max-width: 480px)': {
                      height: '30px',
                      width: '80px',
                    },
                  }}
                >
                  <SearchIcon />
                  <Typography
                    sx={{
                      marginLeft: '5px',
                      fontSize: '16px',
                      color: 'white',
                      '@media (max-width: 768px)': {
                        fontSize: '14px',
                      },
                      '@media (max-width: 480px)': {
                        fontSize: '12px',
                      },
                    }}
                  >
                    Search
                  </Typography>
                </IconButton>
              ),
              sx: {
                padding: '10px 15px',
                borderRadius: '25px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                height: '50px',
                '@media (max-width: 480px)': {
                  height: '40px',
                },
              },
            }}
            fullWidth
          />
        </Box>
      </Box>

      {/* Render filtered data only when there's a search term */}
      {filteredData.length > 0 ? (
        <Grid container spacing={2} sx={{ padding: '20px' }}>
          {filteredData.map((city, cityIndex) => (
            <Grid item xs={12} key={cityIndex}>
              <Typography variant="h4">{city.cityName}</Typography>
              <Typography variant="subtitle1">{city.cityDescription}</Typography>
              <Grid container spacing={2}>
                {city.locations.map((location, locIndex) => (
                  <Grid item xs={12} sm={6} md={4} key={locIndex}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        image={location.houseImages[0]} // Display first house image
                        alt={location.locationTitle}
                        sx={{ height: '200px', objectFit: 'cover' }} // Set consistent image height
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">{location.locationTitle}</Typography>
                        <Typography variant="body2">{location.locationDescription}</Typography>
                        <Typography variant="body2">Starting from: {location.pricing}</Typography>
                        <Typography variant="body2">Price for 2BHK: ₹{location.price2bhk}</Typography>
                        <Typography variant="body2">Price for 3BHK: ₹{location.price3bhk}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
          Enter a city or location to see available homes.
        </Typography>
      )}
    </>
  );
};

export default ResponsiveVideo;
