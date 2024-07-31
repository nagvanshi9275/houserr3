


// Footer.jsx
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  InputBase,
  Button,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        background: 'linear-gradient(to right, #3b8d99, #6b8cce)',
        color: 'white',
        py: 8,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
        transform: 'translateY(-3px)',
        mt: 8,
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 8 }, textAlign: 'center' }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Roomoyo Pvt. Ltd.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              123 Main Street,
              <br />
              Anytown, India 123456
            </Typography>
            <Divider sx={{ bgcolor: 'white', mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="mailto:contact@roomoyo.com"
                aria-label="Email"
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <MuiLink
              href="/"
              color="inherit"
              underline="none"
              display="block"
              variant="body2"
              sx={{
                mb: 1,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-3px)' },
              }}
            >
              Home
            </MuiLink>
            <MuiLink
              href="/privillage"
              color="inherit"
              underline="none"
              display="block"
              variant="body2"
              sx={{
                mb: 1,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-3px)' },
              }}
            >
              Privillage
            </MuiLink>
            <MuiLink
              href="/how-to-book"
              color="inherit"
              underline="none"
              display="block"
              variant="body2"
              sx={{
                mb: 1,
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-3px)' },
              }}
            >
              How to Book
            </MuiLink>
            <MuiLink
              href="/contact"
              color="inherit"
              underline="none"
              display="block"
              variant="body2"
              sx={{
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-3px)' },
              }}
            >
              Contact Us
            </MuiLink>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Newsletter
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: 2 }}>
              Subscribe to our newsletter to get the latest updates.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <InputBase
                placeholder="Your Email"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  px: 2,
                  py: 1,
                  borderRadius: '4px 0 0 4px',
                  color: 'white',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:focus': {
                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                    transform: 'translateY(-3px)',
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: '0 4px 4px 0',
                  px: 2,
                  py: 1,
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <SendIcon />
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We are a leading real estate company dedicated to providing quality
              homes with exceptional service.
            </Typography>
            <Typography variant="body2">
              <MuiLink
                href="/about"
                color="inherit"
                underline="always"
                sx={{
                  fontWeight: 'bold',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-3px)' },
                }}
              >
                Learn More
              </MuiLink>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" color="white">
          &copy; {new Date().getFullYear()} Roomoyo Pvt. Ltd. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;








