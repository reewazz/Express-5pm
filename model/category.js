import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  title: String, 
//   title : {
//     type:String,
//     required:true
//   },
  description: String,
  status: Boolean
  
});

export const Category = mongoose.model('Category', categorySchema);