

import User from "../Model/user.model.js";


import Product from "../Model/product.model.js";

import Confirmed from "../Model/Confirm.model.js";

export default async function Confirme(req, res){

    try {


  const{city, location,  pricing, name, email, phone} = req.body;

  const user = await User.findOne({email})

  if(!user) return res.status(404).json({message: "User not found"})

   let confirmeddata = await Confirmed.findOne({email: user.email})

   if(!confirmeddata){

    confirmeddata = new Confirmed({

     city,

     location,

     pricing,

     name,

     email, 

     phone





    })

    await confirmeddata.save()

    res.status(201).json({message: "Confirmed successfully", confirmeddata})



   } else {

    confirmeddata.city = city,

    confirmeddata.location = location,

    confirmeddata.pricing = pricing,

    confirmeddata.name = name,

    confirmeddata.email = email,

    confirmeddata.phone = phone





   }


        
    } catch (error) {

        console.log(error.message)
        
    }







}





