

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

import NavBar from './Navbar';
import ResponsiveVideo from './Responsivevideo';
import Form from "./Form";
import vimeo from "./houserr.mp4";
import Citydata from "./Citydata";
import Citydetail from "./Citydetail";  // Import Citydetail component
import { NoEncryptionGmailerrorredRounded } from "@mui/icons-material";

import House from "./House";

export default function App() {

const[message, setmessage] = React.useState("")

const[gmail, setgmail] = React.useState("")

const[phone, setphone] = React.useState("")


  return (
    <Router>
      <NavBar />
      <Container sx={{ marginTop: '30px' }}>
        <Routes>
          {/* The video and city data will be displayed on the home route */}
          <Route path="/" element={
            <>

              {message && <h1>WELCOME: {message}</h1>}

              <ResponsiveVideo src={vimeo} />
              <Citydata />
            </>
          } />

          {/* Add a route for individual cities */}
          <Route path="/:cityName" element={<Citydetail message={message} gmail={gmail} />} />

          {/* The form will be displayed on the /blog route */}

          <Route path="/house/:city/:location" element={<House message={message} gmail={gmail} phone={phone} />} />

          <Route path="/blog*" element={<Form setmessage={setmessage} setgmail={setgmail} setphone={setphone} />}/>

         


        </Routes>
      </Container>
    </Router>
  );
}







