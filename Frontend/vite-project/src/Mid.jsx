
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box); // Create a motion-enabled Box component

const RoomyoAd = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '70vw', lg: '80vw' },
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: { xs: '20px', md: '30px' },
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} sm={6}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            sx={{
              backgroundColor: '#a2d2ff',
              padding: '20px',
              borderRadius: '15px',
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '::before': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderTop: '10px solid #a2d2ff',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '2em', md: '3em' },
                color: '#333',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              "Hello!!! Students & Working Professionals"
            </Typography>
          </MotionBox>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: '#f2f2f2',
              padding: '20px',
              borderRadius: '15px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.2em',
                color: '#555',
                lineHeight: 1.6,
                textAlign: 'left',
              }}
            >
              Frustrated with finding the perfect home for students and working professionals? Look no further! ROOMYO offers flats and houses exclusively designed for your needs. Discover comfort and convenience tailored just for you. Find your ideal space with ROOMYO today!
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: '60px', textAlign: 'center' }}>
        <Button variant="contained" color="error">
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default RoomyoAd;









