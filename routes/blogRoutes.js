import express from "express";
import { createBlog, getAllBlogs, getBlogsByCategory } from "../controller/blogController.js";



const router = express.Router()


router.post('/create',createBlog)
router.get('/get',getAllBlogs)
// router.get('/getById/:id',getAllBlogs)
router.get('/getByCat/:categoryId', getBlogsByCategory)






export default router