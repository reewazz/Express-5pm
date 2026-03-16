import mongoose from "mongoose";


export const connectDB = async()=> {
try{
   const res = await mongoose.connect(process.env.DB_URL);
console.log("connection successful")
}
catch(err){
  console.log("error in connection",err)
}
}