

import React, { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Box,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Importing Close icon
import videoFile from "./WhatsApp Video 2024-08-31 at 00.53.36.mp4"; // Adjust the import path if necessary

export default function AgentForm() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here

    // Show the video popup
    setIsVideoVisible(true);
  };

  const handleClose = () => {
    setIsVideoVisible(false);
  };

  return (
    <Box
      sx={{
        p: 3,
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Agent Form
      </Typography>

      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: "56px",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Agent
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: "56px",
              backgroundColor: "#d32f2f",
              "&:hover": {
                backgroundColor: "#9a0007",
              },
            }}
          >
            Owner
          </Button>
        </Grid>
      </Grid>

      <Box mt={4} component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              type="tel"
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                height: "56px",
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "8px",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #e52e71, #ff8a00)",
                  boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Video Popup */}
      <Modal
        open={isVideoVisible}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "80%",
            maxWidth: "800px",
            bgcolor: "#000",
            boxShadow: 24,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            playsInline
            onEnded={handleClose} // Close modal when video ends
            sx={{
              display: "block",
            }}
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
    </Box>
  );
}







