import React from "react";
import { Grid, TextField, Button, Typography, Box, Container } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Requestcall() {
  return (
    <Container sx={{ marginTop: "20px" }}>
      {/* Top Image */}
      <img
        src="https://i.postimg.cc/bv5mhwhm/Whats-App-Image-2024-08-31-at-15-18-23-1.jpg"
        alt="Top Image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />

      {/* Two Column Layout */}
      <Grid
        container
        spacing={4}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          marginTop: "20px",
        }}
      >
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <TextField label="Name" variant="outlined" fullWidth />

            {/* Email and Phone Number in Two Columns */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Phone Number" variant="outlined" fullWidth />
              </Grid>
            </Grid>

            <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Get In Touch
          </Typography>

          {/* Additional Text Below "Get In Touch" */}
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            For any queries, property visit, or booking, please feel free to reach out to us at your convenience.
          </Typography>

          {/* Icons in One Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px", // Space between each contact detail
            }}
          >
            {/* Phone Number */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer", // Pointer cursor on hover
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "pink", // Pink background
                }}
              >
                <PhoneIcon />
              </Box>
              <Typography variant="body1">+91-9511523388</Typography>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer", // Pointer cursor on hover
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "pink", // Pink background
                }}
              >
                <EmailIcon />
              </Box>
              <Typography variant="body1">supportroomyo@gmail.com</Typography>
            </Box>

            {/* Location */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer", // Pointer cursor on hover
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "pink", // Pink background
                }}
              >
                <LocationOnIcon />
              </Box>
              <Typography variant="body1">pratap nagar, jaipur 302033</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
