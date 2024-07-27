

import express from "express"


import Register from "../Controllors/user.controllor.js"

import Login from "../Controllors/Login.controllor.js"

//import Productdata from "../Controllors/Login.controllor.js"

import Getconfirmed from "../Controllors/get.confirmed.js"

import Productdata from "../Controllors/product.controllor.js"

import Confirme from "../Controllors/Confirmed.controllor.js"

const router = express.Router()


router.post('/register', Register)

router.post('/login', Login)

router.post('/productdata', Productdata)

router.post('/confirmed', Confirme)

router.post('/getdata', Getconfirmed)


export default router

//getdata


//https://localhost:4000/productdata

//productdata










