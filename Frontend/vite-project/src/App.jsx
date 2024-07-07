


import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import NavBar from './Navbar';
import ResponsiveVideo from './Responsivevideo';
import Form from "./Form";
import vimeo from "./houserr.mp4";

export default function App() {
  return (
    <Router>
      <NavBar />
      {/* Place the Container here to wrap the Routes */}
      <Container sx={{ marginTop: '0px' }}>
        <Routes>
          {/* The video will be displayed only on the home route */}
          <Route path="/" element={<ResponsiveVideo src={vimeo} />} />
          {/* The form will be displayed on the /blog route */}
          <Route path="/blog*" element={<Form />} />
        </Routes>
      </Container>
    </Router>
  );
}














