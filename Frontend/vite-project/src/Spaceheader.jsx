import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import videoFile from "./WhatsApp Video 2024-08-31 at 00.53.36.mp4";

export default function Spaceheader() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitted(true); // Update state to indicate form has been submitted
    setShowVideo(true); // Show video when form is submitted
  };

  // Use effect to set a timer to hide the video after 5 seconds
  useEffect(() => {
    if (showVideo) {
      const timer = setTimeout(() => {
        setShowVideo(false);
      }, 5000); // 5000 ms = 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [showVideo]);

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: "#f0f4f8",
              padding: "40px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="p"
              component="p"
              sx={{
                borderRadius: "4px",
                display: "inline-block",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                fontSize: { xs: "17.5px", sm: "17.5px", md: "2.5rem", lg: "3rem" },
                width: "100%",
              }}
            >
              House Homes 28 Galleries
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                marginTop: "20px",
                color: "#333",
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
              Step into the world of opulence and charm of House Homes, offering an
              incredible living experience located in the heart of Gurgaon. This
              exclusive property is an artistic masterpiece that boasts top-tier
              interior design in prime cities.
            </Typography>

            {/* Address Section */}
            <Box
              sx={{
                backgroundColor: "#e0f7fa",
                padding: "20px",
                borderRadius: "8px",
                marginTop: "30px",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  color: "#1976d2",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Address
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "#333",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  marginBottom: "10px",
                }}
              >
                Sector 28 near Pratap Nagar, Ghaziabad, Delhi
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "#333",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                }}
              >
                Room Type: Non-balcony
              </Typography>
            </Box>

            {/* Hosted by Section */}
            <Box
              sx={{
                marginTop: "30px",
                textAlign: "left",
                backgroundColor: "#f0f4f8",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                width: "80%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Hosted by
              </Typography>

              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <PersonIcon sx={{ fontSize: 160, color: "#1976d2" }} />
                </Grid>

                <Grid item>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Utkarsh Sen
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Residential Manager
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Language known: Hindi, English
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: "#e0e0e0",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">Hello</Typography>

            <Box sx={{ marginTop: "20px" }}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 20px",
                  width: "100%",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  borderRadius: "8px",
                  marginBottom: { xs: "20px", md: "20px" },
                }}
              >
                <Typography variant="p" sx={{ flex: 1, textAlign: "left" }}>
                  1RK
                </Typography>
                <Typography variant="p" sx={{ flex: 1, textAlign: "right" }}>
                  ₹ 52000/mo*
                </Typography>
              </Button>

              <Button
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 20px",
                  width: "100%",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  borderRadius: "8px",
                  marginBottom: { xs: "20px", md: "0" },
                }}
              >
                <Typography variant="p" sx={{ flex: 1, textAlign: "left" }}>
                  1RK
                </Typography>
                <Typography variant="p" sx={{ flex: 1, textAlign: "right" }}>
                  ₹ 52000/mo*
                </Typography>
              </Button>

              <Typography variant="p" sx={{ flex: 1, textAlign: "right" }}>
                The starting price shown excludes GST. Final price may vary depending
                on room occupation, personalized services, and additional features.
              </Typography>
            </Box>

            {/* Conditional Video Section */}
            {showVideo ? (
              <Box
                sx={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <video
                  width="100%"
                  height="auto"
                  controls
                  autoPlay
                  style={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <source src={videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            ) : (
              <Box
                sx={{
                  backgroundColor: "#fafafa",
                  padding: "20px",
                  borderRadius: "8px",
                  marginTop: "20px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#1976d2",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Want to know more
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    marginBottom: "20px",
                  }}
                >
                  Leave your contact info, we will reach out shortly.
                </Typography>

                {/* Name and Phone Inputs */}
                <TextField
                  label="Name"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                  required
                />
                <TextField
                  label="Phone"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                  required
                />

                {/* Submit Button with Gradient Background */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #1976d2 30%, #64b5f6 90%)",
                    color: "white",
                    '&:hover': {
                      background: "linear-gradient(45deg, #64b5f6 30%, #1976d2 90%)",
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
