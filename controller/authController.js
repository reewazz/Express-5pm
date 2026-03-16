import bcrypt from "bcrypt"
import { User } from "../model/user.js"
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{

    try{
        const {fullName,email,password} = req.body

        const existingEmail = await User.findOne({email:email})
        if(existingEmail){
            return res.status(400).json("Email already exists")
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            fullName : req.body.fullName,  //also this
            email: email,  // can also do this
            password:hashedPassword
        })
        

        res.json({
            message:"User created Successfully",
            user: {
                email:user.email,
                fullName: user.fullName
            }
        })
        // const fullName = req.body.fullName // old way
    }
    catch(error){
        console.log(error)
    }

}


export const login = async(req,res)=>{
    try{
        const {email,password} = req.body

        const existingUser = await User.findOne({email:email})
        if(!existingUser){
                return res.status(500).json("User not found")
        }

        const isMatch = await bcrypt.compare(password,existingUser.password)

        if(!isMatch){
                return res.status(500).json("Wrong credentials")
        }
        else{
            

            const token = jwt.sign({
                _id: existingUser._id,
                email: existingUser.email,
                fullName:existingUser.fullName
            },"mernstack"
            
            // {expiresIn: "1h"}
        )

        res.status(200).json({
            message:"User Logged in Successfully",
                  user: {
                email:existingUser.email,
                fullName: existingUser.fullName
            },
            token:token
            
        })
        }

    


    }
    catch(error){
        console.log(error)
    }
}