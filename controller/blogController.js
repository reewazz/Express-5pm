import { Blog } from "../model/blog.js"

export const createBlog = async(req,res)=> {
   try{
     const createdBlog = await Blog.create(req.body)
    res.json(createdBlog)
   }
   catch(err){
    console.log(err)
   }
}


export const getAllBlogs = async(req,res)=> {
    const ok = await Blog.find().populate("category")
    // find().populate("category" , "-status")

    res.json(ok)

}

export const getBlogsByCategory= async(req,res)=> {
    const categoryFromFrontend = req.params.categoryId 
const blogs = await Blog.find({category: categoryFromFrontend})
res.json(blogs)
} 