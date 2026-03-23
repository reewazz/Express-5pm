import express from "express";
import mongoose from "mongoose"
import { connectDB } from "./config/db.js";
import categoryRoutes from './routes/categoryRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { Category } from "./model/category.js";
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer";
import path from "path"
import { upload } from "./middlewares/file.js";

const app = express();


dotenv.config()
app.use(cors(
  {
    origin : "http://localhost:5173"
  }
))
app.use(express.json())

connectDB()

// app.use('/uploads', express.static(path.join(process.cwd(),'uploads')))
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));





app.post('/upload-image', upload.single('image'), function (req, res) {
 try{
  console.log("image from multer" , req.file)
 res.json("hello")
 }
 catch(err){
  console.log(err)
 }
})

app.get("/", (req, res) => {
  res.send("Backend is running....");
});

const products = [
  {
    id: 1,
    name: "product 1",
  },
  {
    id: 2,
    name: "product 2",
  },
];

app.get("/riwaj", (req, res) => {
  res.json(products);
});


app.get('/product/:id',(req,res)=>{


    const id = req.params.id
    console.log(req.params.id)

   const newvalue = products.find((item,index)=>(
        item.id == id
    ))

    console.log()
    res.json(newvalue)
})






app.use("/category",categoryRoutes)
app.use("/blog",blogRoutes)
app.use("/auth",authRoutes)





app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
