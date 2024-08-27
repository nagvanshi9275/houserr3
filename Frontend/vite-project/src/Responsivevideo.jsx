import React, { useState, useEffect } from 'react';
import { IconButton, TextField, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ResponsiveVideo = ({ src }) => {
  const [placeholders, setPlaceholders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setPlaceholders(['Search home', 'Search location', 'Search place']);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
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
          height: '60vh'
        }}
      >
        <TextField
          variant="outlined"
          placeholder={placeholders[currentIndex]}
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
  );
};

export default ResponsiveVideo;
