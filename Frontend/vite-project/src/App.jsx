


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
import Button from "./Button";

import Experiment1 from "./Experiment1";

import gig from "./WhatsApp Video 2024-08-10 at 00.03.21 (1).mp4";

import Mid from "./Mid";

import Blog from "./Blog";

import BlogDetail from "./Blogdetail";

import Howtobook from "./Howtobook";

import Listing from "./Listing";


//import Findspace from "./Findspace";

import Findspace from "./Findspace";

import AgentForm from "./AgentForm";

import Requestcall from "./Requestcall";

import Footer from "./Footer";


import ItemDetail from "./ItemDetail";

import Getstarted from "./Getstarted";


export default function App() {

const[message, setmessage] = React.useState("")

const[gmail, setgmail] = React.useState("")

const[phone, setphone] = React.useState("")

//const[isregistered, setisregistered] = useState(false)

const [isRegistered, setIsRegistered] = React.useState(false);

  return (


    <Router>
      <NavBar isRegistered={isRegistered}/>

      
      <Container sx={{ marginTop: '30px' }}>
        <Routes>
          {/* The video and city data will be displayed on the home route */}
          <Route path="/" element={
            <>

              { /*message && <h1>WELCOME: {message}</h1> */}

              <ResponsiveVideo src={gig} />

              <Mid/>


              <Citydata />

              <Findspace/>

           

            </>
          } />

        

          {/* Add a route for individual cities */}
          <Route path="/:cityName" element={<Citydetail message={message} gmail={gmail} />} />

          {/* The form will be displayed on the /blog route */}

          <Route path="/house/:city/:location" element={<House message={message} gmail={gmail} phone={phone} />} />

          <Route path="/login*" element={<Form setmessage={setmessage} setgmail={setgmail} setphone={setphone} setIsRegistered={setIsRegistered} />}/>

          <Route path="/button" element={<Experiment1 gmail={gmail}/>}></Route>

          <Route path="/blog" element={<Blog/>}></Route>


          <Route path="/how-to-book" element={<Howtobook/>}></Route>

          <Route path="/listproperty" element={<Listing/>}></Route>

          <Route path="/agent-form" element={<AgentForm/>}></Route>

          <Route path="/request-call" element={<Requestcall/>}></Route>

          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/item/:name" element={<ItemDetail />} />

          <Route path="/getstarted" element={<Getstarted/>}></Route>

        </Routes>


        <Footer/>
      </Container>
    </Router>
  );
}