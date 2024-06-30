


//import User from "../Model/user.model.js";

import User from "../Model/user.model.js";

import bcrypt from "bcryptjs"

import jwt from "jsonwebtoken"

export default async function Register(req, res) {



    const {name, email, password, phone} = req.body;



    try {

    // checking the user 

    let user = User.findOne({email})

   // if(user) return res.status(404).json({message: "User already exist"})


        // for hatching the password 

        const salt = await bcrypt.genSalt(10)

        const hashedpassword = await bcrypt.hash(password, salt)


        user = new User({

          name,
          
          email,

          password: hashedpassword,

          phone




        })

       await user.save()

       res.status(201).json({message: "User registered successfully"})

        
    } catch (error) {

        console.log(error.message)
        
    }









    
}
















