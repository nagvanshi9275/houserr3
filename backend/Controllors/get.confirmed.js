

import User from "../Model/user.model.js";


import Product from "../Model/product.model.js";

import Confirmed from "../Model/Confirm.model.js";




export default async function Getconfirmed(req, res) {



     try{

    const {email} = await req.body

    const user = await User.findOne({email})

  if(!user) return res.status(404).json({message: "User not found"})

    

 //   let usedata = 

  let userdata = await Confirmed.findOne({email: user.email})

  if(!userdata) return res.status(404).json({message: "Userdata not found"})

    
     res.status(200).json({userdata})


      


    


     } catch(error){

      console.log(error.message)


     }





    
}







