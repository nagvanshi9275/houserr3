


import User  from "../Model/user.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export default async function Login(req, res) {

    const {email, password} = req.body;

// for jwt login


try {


const user = await User.findOne({email})

if(!user) return res.status(404).json({message: "User not exist"})


const isMatch = await bcrypt.compare(password, user.password)


if(!isMatch) return res.status(404).json({message: "invalid credientials"})


// generate jwt token

const token = jwt.sign({email: user.email}, process.env.jwt_secret, { expiresIn: '1h' } )

res.status(200).json({message: "loggged in sucessfully", token, name: user.name, email: user.email})
    
} catch (error) {

    console.log(error.message)

    res.status(500).json({message: "SERVERR ERROR Check that"})
    
}




    
}







