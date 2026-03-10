import { Category } from "../model/category.js"

export const getAllCategory = async(req,res)=> {
  const category = await Category.find()
  res.json(category)
}