import app from "./app.js";
import { configDotenv } from "dotenv";
import mongoose  from "mongoose";
configDotenv();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

try{
    const response =await mongoose.connect(process.env.MONGO_URI);
    if(response) console.log("connected to db");
}catch(error){
    console.log(error);
}

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});