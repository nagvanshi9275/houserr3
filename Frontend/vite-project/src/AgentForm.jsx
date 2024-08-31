import React from "react";
import { Grid, Button, TextField, Typography, Box } from "@mui/material";

export default function AgentForm() {
  return (
    <Box
      sx={{
        p: 3,
        maxWidth: "600px", // Set maximum width
        margin: "auto",    // Center the form horizontally
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
              backgroundColor: "#1976d2", // Cool blue color for Agent button
              '&:hover': {
                backgroundColor: "#115293", // Darker blue on hover
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
              backgroundColor: "#d32f2f", // Cool red color for Owner button
              '&:hover': {
                backgroundColor: "#9a0007", // Darker red on hover
              },
            }}
          >
            Owner
          </Button>
        </Grid>
      </Grid>

      <Box mt={4}>
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
              variant="contained"
              fullWidth
              sx={{
                height: "56px",
                background: "linear-gradient(90deg, #ff8a00, #e52e71)", // Gradient color
                color: "#fff", // Text color
                '&:hover': {
                  background: "linear-gradient(90deg, #e52e71, #ff8a00)", // Reverse gradient on hover
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
