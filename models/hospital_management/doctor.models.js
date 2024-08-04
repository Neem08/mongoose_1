import mongoose from 'mongoose'
const doctorSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    patient:{
        type:mongoose.Schema.types.ObjectId,
        ref:"Patient"
    },
    salary:{
        type: String,
        required:true
    },
    qualification:{
        type: String,
        required:true
    }
},{timestamps:true})
export const Doctor= mongoose.models("Doctor", doctorSchema)