



import mongoose from "mongoose";
import { db_Name } from "./constant.js";

export default async function Connect_db() {
    try {
        const connection_logic = await mongoose.connect(`${process.env.Mongodb_url}/${db_Name}`);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error.message);
    }
}
















