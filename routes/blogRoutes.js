import express from "express";
import { createBlog, getAllBlogs, getBlogsByCategory } from "../controller/blogController.js";
import { authMiddleWare } from "../middlewares/authMiddleware.js";



const router = express.Router()


router.post('/create',createBlog)
router.get('/get',authMiddleWare, getAllBlogs)
// router.get('/getById/:id',getAllBlogs)
router.get('/getByCat/:categoryId', getBlogsByCategory)






export default router