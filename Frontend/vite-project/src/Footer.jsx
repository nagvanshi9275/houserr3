

// Footer.jsx
import React from 'react';
import { Box, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', py: 6, width: '100%' }}>
      <Grid container spacing={4} justifyContent="center" sx={{ px: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Company
          </Typography>
          <Typography variant="body2" color="white">
            Roomoyo Pvt. Ltd.<br />
            123 Main Street,<br />
            Anytown, India 123456
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Quick Links
          </Typography>
          <MuiLink href="/" color="white" underline="none" display="block" variant="body2" sx={{ mb: 1 }}>
            Home
          </MuiLink>
          <MuiLink href="/privillage" color="white" underline="none" display="block" variant="body2" sx={{ mb: 1 }}>
            Privillage
          </MuiLink>
          <MuiLink href="/how-to-book" color="white" underline="none" display="block" variant="body2" sx={{ mb: 1 }}>
            How to Book
          </MuiLink>
          <MuiLink href="/contact" color="white" underline="none" display="block" variant="body2">
            Contact Us
          </MuiLink>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Connect with Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="mailto:contact@roomoyo.com" aria-label="Email">
              <EmailIcon />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="white" gutterBottom>
            Newsletter
          </Typography>
          <Typography variant="body2" color="white" gutterBottom>
            Subscribe to our newsletter to get the latest updates.
          </Typography>
          <MuiLink href="/subscribe" color="white" underline="none" display="block" variant="body2">
            Subscribe Now
          </MuiLink>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" color="white">
          &copy; {new Date().getFullYear()} Roomoyo Pvt. Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;







