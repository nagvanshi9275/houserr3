
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

product:{
type: String,
required: true



},

location:{

type: String,

required: true


},

pricing2Bhk:{

type: Number,

required: true


},

pricing3Bhk:{

type: Number,

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

times:{

type: Number,

required: true


}




})


export default mongoose.model('Product', userSchema);







