import mongoose from 'mongoose'
const medical_recordSchema= new mongoose.Schema({
    
},{timestamps:true})
export const Medical_record= mongoose.models("Medical_record", medical_recordSchema)