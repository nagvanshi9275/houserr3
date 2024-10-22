



import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';


import { useNavigate } from 'react-router-dom';

const Login = ({setmessage, setgmail, setphone, setIsRegistered }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 // const handleSubmit = (e) => {
   // e.preventDefault();
    // Here you can handle the login logic (e.g., send data to backend)
   // console.log(formData);










  //};


   async  function handleSubmit(e){

    e.preventDefault();

    try {

      
      const response = await fetch('https://houserr3-3.onrender.com/api/users/login', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },
  
        body: JSON.stringify(formData)




      })

      const data = await response.json();

     // console.log(data);

      if(response.ok){


//    user  research on the authencation segment

        navigate('/')

        setmessage(data.name)

       // console.log(data.name)

        setgmail(data.email)

        setphone(data.phone)

        console.log(data)


        setIsRegistered(true)


      }





       
      
    } catch (error) {

      console.log(error.message)
      
    }





     }







  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );



  
};

export default Login;





