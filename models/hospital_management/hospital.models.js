import mongoose from 'mongoose'
const hospitalSchema= new mongoose.Schema({
    
},{timestamps:true})
export const Hospital= mongoose.models("Hospital", hospitalSchema)