import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const Mid = () => {
  const adRef = useRef(null);
  const textRef = useRef(null); // Ref for the text animation

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 600) { // Apply animation only on large devices
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 2s ease-in-out forwards';

            // Trigger text animation when the container is in view
            if (textRef.current) {
              textRef.current.style.animation = 'slideIn 1s ease-out forwards';
            }
          }
        },
        { threshold: 0.1 } // Adjust this threshold as needed
      );

      if (adRef.current) {
        observer.observe(adRef.current);
      }

      return () => {
        if (adRef.current) {
          observer.unobserve(adRef.current);
        }
      };
    } else {
      // Ensure text is fully visible without animation on small devices
      if (adRef.current) {
        adRef.current.style.opacity = 1;
      }
      if (textRef.current) {
        textRef.current.style.opacity = 1;
        textRef.current.style.transform = 'translateX(0)';
      }
    }
  }, []);

  return (
    <Box
      ref={adRef} // Attach ref to the container
      sx={{
        width: '100%', // Full width for large devices
        maxWidth: { xs: '90vw', sm: '80vw', md: '70vw', lg: '80vw' }, // Adjust width based on screen size
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: { xs: '15px', sm: '20px', md: '30px' }, // Adjust padding based on screen size
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        opacity: 0, // Start with the element invisible
      }}
    >
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: 'rgba(162, 210, 255, 0.1)', // Lightened background color with reduced opacity
              padding: '15px', // Adjust padding for smaller devices
              borderRadius: '15px',
              position: 'relative',
              height: '100%', // Make the box fill the available height
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '::before': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderTop: '10px solid rgba(162, 210, 255, 0.1)', // Adjusted color for the triangle
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
              },
            }}
          >
            <Typography
              variant="h5"
              ref={textRef} // Attach ref to the text
              sx={{
                fontSize: { xs: '1.5em', sm: '2em', md: '3em' }, // Adjust font size based on screen size
                color: '#333',
                fontWeight: 'bold',
                textAlign: 'center',
                opacity: 0, // Start with text invisible
                transform: 'translateX(-100%)', // Start off-screen to the left
                '@media (max-width: 600px)': {
                  opacity: 1, // Ensure opacity is full on small devices
                  transform: 'translateX(0)', // Reset transform on small devices
                },
              }}
            >
              "Hello!!! Students & Working Professionals"
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: 'rgba(242, 242, 242, 0.1)', // Lightened background color with reduced opacity
              padding: '15px', // Adjust padding for smaller devices
              borderRadius: '15px',
              height: '100%', // Make the box fill the available height
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1em', sm: '1.2em' }, // Adjust font size based on screen size
                color: '#555',
                lineHeight: 1.6,
                textAlign: 'left',
                '@media (max-width: 600px)': {
                  opacity: 1, // Ensure opacity is full on small devices
                },
              }}
            >
              Frustrated with finding the perfect home for students and working professionals? Look no further! ROOMYO offers flats and houses exclusively designed for your needs. Discover comfort and convenience tailored just for you. Find your ideal space with ROOMYO today!
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '40px', textAlign: 'center' }}> {/* Adjust margin-top */}
        <Button variant="contained" color="error">
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default Mid;

// Add the CSS keyframes for the fade-in and slide-in animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
