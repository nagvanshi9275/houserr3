



import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import Login from './Login';
import Register from './Register';

import NavBar from './Navbar';



function App() {
  const [fruits, setFruits] = useState([]);

  const[register1,  setregister1] = useState(false)

  const[login1, setlogin1] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/fruit')
      .then(response => response.json())
      .then(data => setFruits(data))
      .catch(error => console.error('Error fetching fruits:', error));
  }, []);

     function Register1(){

       setlogin1(true)

       setregister1(false)


     }

     function Login1() {

        setregister1(true)

        setlogin1(false)


      
     }


   /*
   

   async function Submit1({formData}){

      console.log(formData)

    //  e.preventDefault();
     // e.preventdefault()

  

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


   */





  return (
    <Router>
      <div className="App">

      <NavBar/>


        <Container maxWidth="sm">
          <Box my={4} textAlign="center">

         


            <Box mt={4}>
              <Routes>
                <Route path="/" element={<Register  />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Box>

                         <nav>
             { register1 && <Button component={Link} onClick={Register1} to="/" variant="contained" color="primary" sx={{ margin: 1 }}>
                Register
              </Button>

            }


             { login1 && <Button onClick={Login1} component={Link} to="/login" variant="contained" color="primary" sx={{ margin: 1 }}>
                Login
              </Button>

          }


            </nav>






          </Box>
        </Container>
      </div>
    </Router>
  );
}

export default App;

















