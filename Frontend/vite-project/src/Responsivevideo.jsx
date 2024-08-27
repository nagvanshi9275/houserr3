import React, { useState, useEffect } from 'react';
import { IconButton, TextField, Typography } from '@mui/material';
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
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        marginTop: '-40px',
        padding: '0'
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
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
          }}
        >
          <TextField
            variant="outlined"
            placeholder={placeholders[currentIndex]}
            InputProps={{
              endAdornment: (
                <IconButton
                  style={{
                    padding: '0 10px',
                    color: 'white',
                    backgroundColor: 'red',
                    borderRadius: '25px',
                    height: '10vh',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <SearchIcon />
                  <Typography
                    style={{
                      marginLeft: '5px',
                      fontSize: '16px',
                      color: 'white',
                    }}
                  >
                    Search
                  </Typography>
                </IconButton>
              ),
              style: {
                padding: '10px 15px',
                borderRadius: '25px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              },
            }}
            fullWidth
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .MuiInputBase-input {
              font-size: 14px;
            }
            .MuiIconButton-root {
              font-size: 14px;
            }
            .MuiTypography-root {
              font-size: 14px;
            }
          }
          @media (max-width: 480px) {
            .MuiInputBase-input {
              font-size: 12px;
            }
            .MuiIconButton-root {
              font-size: 12px;
            }
            .MuiTypography-root {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResponsiveVideo;
