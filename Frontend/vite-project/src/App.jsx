

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

import NavBar from './Navbar';
import ResponsiveVideo from './Responsivevideo';
import Form from "./Form";
import vimeo from "./houserr.mp4";
import Citydata from "./Citydata";
import Citydetail from "./Citydetail";  // Import Citydetail component

export default function App() {
  return (
    <Router>
      <NavBar />
      <Container sx={{ marginTop: '30px' }}>
        <Routes>
          {/* The video and city data will be displayed on the home route */}
          <Route path="/" element={
            <>
              <ResponsiveVideo src={vimeo} />
              <Citydata />
            </>
          } />

          {/* Add a route for individual cities */}
          <Route path="/:cityName" element={<Citydetail />} />

          {/* The form will be displayed on the /blog route */}
          <Route path="/blog*" element={<Form />} />
        </Routes>
      </Container>
    </Router>
  );
}







