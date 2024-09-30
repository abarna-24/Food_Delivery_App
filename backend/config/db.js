import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://abarna:abarna@cluster0.axgyea1.mongodb.net/food-del').then(()=>console.log("DB connected"))
}