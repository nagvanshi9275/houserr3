


import React from "react";

import { Button } from "@mui/material";


export default function Flexible(){


    function Get(){


        try {

     const response = fetch("https://houserr3-3.onrender.com/api/users/getdata", {

         method: "POST",

         headers: {
   
            "Content-Type": "application/json",






         },


        body: JSON.stringify({
            
            email: gmail
        
        
        
        
        })








     })





            
        } catch (error) {

            console.log(error.message)
            
        }








    }





    return(

      <div>


        <h1>Flexible</h1>

        <Button onClick={Get}>Get data</Button>


          









      </div>







    )







}






