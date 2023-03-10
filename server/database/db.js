import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async ()=>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.jlncukk.mongodb.net/?retryWrites=true&w=majority`;

    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL);
        console.log("!!! Connected to Database");
    }catch(error){
        console.log('Error while connecting to database',error);
    }
}

export default Connection;