

// src/components/ResponsiveVideo.js
import React from 'react';
import { Box } from '@mui/material';

const ResponsiveVideo = ({ src }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        backgroundColor: '#000',
        '& iframe, & video': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default ResponsiveVideo;


















