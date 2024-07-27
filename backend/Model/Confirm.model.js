

import mongoose from "mongoose";




const userSchema = new mongoose.Schema({

    city:{
     
     type: [String],
     required: true
     



    },

    location:{
     type: [String],
     required: true


    },

    pricing:{
     type: [Number],
     
     required: true




    },

    name:{
     type: String,

     required: true




    },

    email:{
    type: String,
    required: true

    },

    phone:{

    type: Number,
    required: true

    },

    image:{

    type: [String],
    
    required: true




    }









})


export default mongoose.model('Confirmed', userSchema);

















