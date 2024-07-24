


import React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Button, Box, Container } from '@mui/material';
import Login from "./Login";
import Register from "./Register";

export default function Form({setmessage, setgmail, setphone}) {
  const [show, setShow] = React.useState(false);
  const [dark, setDark] = React.useState(true);
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleRegister = () => {
    console.log("register route");
    setDark(false);
    setShow(true);
    navigate("/blog/register"); // Navigate to the register route
  };

  const handleLogin = () => {
    console.log("login");
    setShow(false);
    setDark(true);
    navigate("/blog/"); // Navigate to the login route
  };

  return (
    <Container maxWidth="sm">

      


      <Box my={4} textAlign="center">
        <Routes>
          <Route path="/register" element={<Register setmessage={setmessage} setgmail={setgmail} setphone={setphone}/>} />
          <Route path="/" element={<Login setmessage={setmessage} setgmail={setgmail} setphone={setphone} />} />
        </Routes>
        
        <Box display="flex" justifyContent="center" mt={2}>
          {dark && (
            <Button
              onClick={handleRegister}
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                mx: 1,
              }}
            >
              Register
            </Button>
          )}
          {show && (
            <Button
              onClick={handleLogin}
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                mx: 1,
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}






