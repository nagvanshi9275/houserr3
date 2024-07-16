

import express from "express"


import Register from "../Controllors/user.controllor.js"

import Login from "../Controllors/Login.controllor.js"

//import Productdata from "../Controllors/Login.controllor.js"


import Productdata from "../Controllors/product.controllor.js"

import Confirme from "../Controllors/Confirmed.controllor.js"

const router = express.Router()


router.post('/register', Register)

router.post('/login', Login)

router.post('/productdata', Productdata)

router.post('/confirmed', Confirme)


export default router




//https://localhost:4000/productdata

//productdata










