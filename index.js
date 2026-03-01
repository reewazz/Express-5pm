import express from "express";
import mongoose from "mongoose"
import { connectDB } from "./config/db.js";
import { Category } from "./model/category.js";
import cors from "cors"

const app = express();

app.use(cors(
  {
    origin : "http://localhost:5173"
  }
))
app.use(express.json())

connectDB()

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


app.post("/category/create",async(req,res)=> {
  console.log(req.body)
  const title = req.body.title
  console.log(title,"thisis title")

  const existingTitle = await Category.find({title})
  console.log(existingTitle,"existing")

  if(existingTitle.length >0){
    return res.status(400).json("title already exist")
  }

  
  const category = await Category.create(req.body)
  res.json(category)
})

app.get("/category/getAll",async(req,res)=> {
  const category = await Category.find()
  res.json(category)
})


app.get("/category/:id",async(req,res)=>{
  
  const category = await Category.findById(req.params.id)
  res.json(category)
})

app.put("/category/update/:id",async(req,res)=>{
   const existingTitle = await Category.find({title})
  console.log(existingTitle,"existing")

  if(existingTitle.length >0){
    return res.status(400).json("title already exist")
  }

  const category = await Category.findByIdAndUpdate(req.params.id,req.body ,{new:true})
  res.json(category)

})



app.delete("/category/delete/:id",async(req,res)=>{
  const category = await Category.findByIdAndDelete(req.params.id)
  res.json("Deleted Succesfully ")
})


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
