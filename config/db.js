import mongoose from "mongoose";


export const connectDB = async()=> {
try{
   const res = await mongoose.connect('mongodb+srv://admin:admin@blog-management.govj2q8.mongodb.net/?appName=Blog-Management');
console.log("connection successful")
}
catch(err){
  console.log("error in connection",err)
}
}