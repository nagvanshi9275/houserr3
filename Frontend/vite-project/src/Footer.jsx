

import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#003366', // Dark blue background for a professional look
        color: 'white',
        width: "95.9vw", // Full width
        ml: { xs: -2, sm: -2, md: -10 },
        mt: 5,
        py: 6,
        mx: 'auto', // Center content horizontally
        overflowX: 'hidden' // Prevent horizontal scroll
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* First Column */}
          <Grid item xs={12} md={6}>
            <img src="https://i.postimg.cc/W1QVXCCw/Waves.png" alt="Logo" style={{ width: '150px', marginBottom: '16px' }} />
            <Typography variant="body1">+91-1234567890</Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton href="https://www.youtube.com" target="_blank" sx={{ color: 'white' }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: 'white' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Rent</Typography>
            <Link href="/listproperty" color="inherit" underline="none">
              <Typography variant="body1">List Property</Typography>
            </Link>
            <Link href="/buy-location" color="inherit" underline="none">
              <Typography variant="body1">By Location</Typography>
            </Link>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Company</Typography>
              <Link href="/about-us" color="inherit" underline="none">
                <Typography variant="body1">About Us</Typography>
              </Link>
              <Link href="/blog" color="inherit" underline="none">
                <Typography variant="body1">Blog</Typography>
              </Link>
              <Link href="/careers" color="inherit" underline="none">
                <Typography variant="body1">Careers</Typography>
              </Link>
              <Link href="/partners" color="inherit" underline="none">
                <Typography variant="body1">Partners</Typography>
              </Link>
              <Link href="/contact-us" color="inherit" underline="none">
                <Typography variant="body1">Contact Us</Typography>
              </Link>
            </Box>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Services</Typography>
            <Link href="/roomyo-coliving" color="inherit" underline="none">
              <Typography variant="body1">Roomyo Coliving</Typography>
            </Link>
            <Link href="/roomyo-homes" color="inherit" underline="none">
              <Typography variant="body1">Roomyo Homes</Typography>
            </Link>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Support</Typography>
              <Link href="/faqs" color="inherit" underline="none">
                <Typography variant="body1">FAQs</Typography>
              </Link>
              <Link href="/terms-and-conditions" color="inherit" underline="none">
                <Typography variant="body1">Terms and Conditions</Typography>
              </Link>
              <Link href="/privacy-policy" color="inherit" underline="none">
                <Typography variant="body1">Privacy Policy</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;














