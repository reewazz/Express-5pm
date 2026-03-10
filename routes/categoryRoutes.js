import express from "express";
import { Category } from "../model/category.js";
import { getAllCategory } from "../controller/categoryController.js";


const router = express.Router()






router.post("/create",async(req,res)=> {
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

router.get("/getAll",getAllCategory)


router.get("/:id",async(req,res)=>{
  
  const category = await Category.findById(req.params.id)
  res.json(category)
})

router.put("/update/:id",async(req,res)=>{
   const existingTitle = await Category.find({title})
  console.log(existingTitle,"existing")

  if(existingTitle.length >0){
    return res.status(400).json("title already exist")
  }

  const category = await Category.findByIdAndUpdate(req.params.id,req.body ,{new:true})
  res.json(category)

})

router.delete("/delete/:id",async(req,res)=>{
  const category = await Category.findByIdAndDelete(req.params.id)
  res.json("Deleted Succesfully ")
})

export default router