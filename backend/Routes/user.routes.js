

import express from "express"


import Register from "../Controllors/user.controllor.js"

import Login from "../Controllors/Login.controllor.js"





const router = express.Router()


router.post('/register', Register)

router.post('/login', Login)


export default router

















