



// src/components/Register.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 // const handleSubmit = (e) => {
   // e.preventDefault();
    // Here you can handle the registration logic (e.g., send data to backend)
    //console.log(formData);
  //};

  async function onSubmit(e){

    e.preventDefault();

    console.log(formData);


    try{

      const response = await fetch('http://localhost:4000/api/users/register', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },
  
        body: JSON.stringify(formData)




      })

      const data = await response.json();

      console.log(data);




    } catch(error) {

      console.log(error.message)



    }









   

  }

  


  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
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
            label="Phone"
            name="phone"
            value={formData.phone}
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
            Register
          </Button>
        </form>
      </Box>


       

    </Container>
  );
};

export default Register;

























