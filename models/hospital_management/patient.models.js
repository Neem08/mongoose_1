import mongoose from 'mongoose'
const patientSchema= new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    diagonsedWith:{
        type: String,
        required:true
    },
    level:{
        type:Number,
        required:true,
        default:0
    },
    addres:{
        type: String,
        required:true
    },
    bloodGroup:{
        type: String,
        required:true
    },
    gender:{
        type:String, enum:["M","F","others"]
    },
    admittedIn:{
        type: mongoose.Schema.types.ObjectId,
        ref:"Hospital"
    },
    doctorWho:{
        type: mongoose.Schema.types.ObjectId,
        ref:"Doctor"
    }

},{timestamps:true})
export const Patient= mongoose.models("Patient", patientSchema)