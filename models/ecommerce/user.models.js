import mongoose from  'mongoose'
const user = new mongoose.Schema({
    username:{
         type: String,
         required :true,
         unique: true, 
         lowercase: true
    },
    email:{
        type: String,
        required :true,
        unique: true, 
        lowercase: true
   },
   password:{
    type: String,
    required: true,
    min:[6, "password should be more than 6 letters"]
   }
}
, {
    timestamps: true,
})

export const User = mongoose.model("User", userSchema);