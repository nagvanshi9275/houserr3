




import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Card, CardMedia, CardContent, Typography, IconButton, CardActions } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import homeData from "./homedata";

import { Button } from '@mui/material';

import Form from "./Form";

import Login from "./Login"

import {  useNavigate , Link} from "react-router-dom";

export default function Citydetail({message, gmail}) {

   const[visible, setvisible] = React.useState(false)


  const[city2, setcity2] = React.useState("")


  const { cityName } = useParams();
  const city = homeData.find((city) => city.cityName === cityName);

    const navigate = useNavigate();



  const [imageIndexes, setImageIndexes] = useState(
    city.locations.map(() => 0) // Initialize image indexes for each location to 0
  );

  const handleNextImage = (locationIndex) => {
    setImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[locationIndex] = (newIndexes[locationIndex] + 1) % city.locations[locationIndex].houseImages.length;
      return newIndexes;
    });
  };

  if (!city) return <div>City not found</div>;






      async   function Buy(location){

             //   console.log("buy")

          //   console.log(message)


            //console.log(city2)

  
         // console.log(city.cityName)

         // console.log(location.price3bhk)

        //  console.log(location.price2bhk)

        // console.log(location.locationTitle)

      //   console.log(gmail)



      const formData = {
      //  message,
       // city2,

        product: city.cityName,
        location: location.locationTitle,
        pricing2Bhk: location.price2bhk,
        pricing3Bhk: location.price3bhk,
        name: message,
        email:gmail
      };





          try{

            const response = await fetch('http://localhost:4000/api/users/productdata', {

              method: 'POST',

              headers: {
                'Content-Type': 'application/json'
              },
        
              body: JSON.stringify(formData)








            })

            const data = await response.json()

            if(response.ok){

              console.log(message, "your home are added soon our team reachout to you")

              //navigate('/confirmed')

             // navigate(`/${city.cityName}/${location.locationTitle}`);

            }




          } catch(error){

           console.log(error.message)


          }





         }






  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        {city.cityName}
      </Typography>
      <Typography variant="body1" paragraph>
        {city.cityDescription}

        

      </Typography>
      <Grid container spacing={3}>
        {city.locations.map((location, locationIndex) => (
          <Grid item xs={12} sm={6} md={4} key={locationIndex}>
            <Card style={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image={location.houseImages[imageIndexes[locationIndex]]} // Display current image based on index
                alt={location.locationTitle}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {location.locationTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {location.locationDescription}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {location.pricing}
                </Typography>

                <Link to={`/house/${city.cityName}/${location.locationTitle}`}>

                <Button onClick={() => Buy(location)} variant="contained" color="warning">
                              Buy NOW!
                     </Button>

              </Link>

              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="next image"
                  onClick={() => handleNextImage(locationIndex)}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '50%', // Center the IconButton horizontally
                    transform: 'translateX(-50%)', // Adjust to center the IconButton perfectly
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Use a semi-transparent background for better visibility
                    zIndex: 1, // Ensure the icon is above CardMedia content
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}







