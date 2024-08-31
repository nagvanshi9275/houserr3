import React from "react";
import { Grid, Typography, Paper, Button, Box } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import videoFile from './WhatsApp Video 2024-08-30 at 23.46.26.mp4'; // Adjust the import path if necessary

export default function Listing() {
  const paperHeight = 400; // Adjust the height as needed
  const navigate = useNavigate(); 

  function handleListing() {
    navigate('/agent-form');
  }

  return (
    <div style={{ padding: 16 }}>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: 16, height: paperHeight }}>
            <Typography variant="h4">
              List Your Property<br />
              <span style={{ color: 'green' }}>For free!!!</span>
            </Typography>
            <div style={{ marginTop: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <CheckCircleIcon color="success" style={{ marginRight: 8 }} />
                <Typography variant="body1">Hassle Free Listing</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <CheckCircleIcon color="success" style={{ marginRight: 8 }} />
                <Typography variant="body1">Get access to verified Tenants</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon color="success" style={{ marginRight: 8 }} />
                <Typography variant="body1">Free marketing & assured Rentals</Typography>
              </div>
              {/* List Now Button */}
              <div style={{ marginTop: 24 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleListing}
                  style={{
                    backgroundColor: '#1E90FF', // Cool color
                    borderRadius: 20, // Border radius
                    padding: '10px 20px',
                    fontSize: '16px',
                    textTransform: 'none'
                  }}
                >
                  List Now
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
        
        {/* Second Column */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: 16, height: paperHeight, textAlign: 'center' }}>
            <video 
              src={videoFile} 
              autoPlay 
              loop 
              muted
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Steps Section */}
      <Box mt={4}>
        <Typography variant="h4" gutterBottom align="center">
          3 Easy Steps of Listing
        </Typography>
        <Grid container spacing={2}>
          {/* Step 1 */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <img 
                src="https://i.postimg.cc/W3tBxLzw/Whats-App-Image-2024-08-30-at-23-42-18.jpg" 
                alt="Step 1"
                style={{ width: '100%', maxWidth: 100, height: 'auto', objectFit: 'cover' }}
              />
              <Box mt={2} textAlign="center">
                <Typography variant="h6">
                  Step 1: Register Your Property
                </Typography>
                <Typography variant="body1">
                  Sign up and provide the necessary details about your property.
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Step 2 */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <img 
                src="https://i.postimg.cc/HsbfqtYR/Whats-App-Image-2024-08-30-at-23-48-51.jpg" 
                alt="Step 2"
                style={{ width: '100%', maxWidth: 100, height: 'auto', objectFit: 'cover' }}
              />
              <Box mt={2} textAlign="center">
                <Typography variant="h6">
                  Step 2: Verify Your Details
                </Typography>
                <Typography variant="body1">
                  Our team will review and verify your property details for authenticity.
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Step 3 */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <img 
                src="https://i.postimg.cc/6QpgGJrx/Whats-App-Image-2024-08-30-at-23-49-31.jpg" 
                alt="Step 3"
                style={{ width: '100%', maxWidth: 100, height: 'auto', objectFit: 'cover' }}
              />
              <Box mt={2} textAlign="center">
                <Typography variant="h6">
                  Step 3: Go Live
                </Typography>
                <Typography variant="body1">
                  Once approved, your property listing will be live and accessible to potential tenants.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
