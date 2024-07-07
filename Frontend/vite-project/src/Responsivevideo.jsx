


// src/components/ResponsiveVideo.js
import React from 'react';
import { Box } from '@mui/material';

const ResponsiveVideo = ({ src }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        '& video': {
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        },
      }}
    >
      <video autoPlay muted loop playsInline>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default ResponsiveVideo;

















