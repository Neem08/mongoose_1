import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    //  name : String,
    //  email : String,
    //  isActive : Boolean,

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: { type: String, required: true },
    password: {
      type: String,
      required: true,
      min: [6, 'Must be atleast 6 character, got {VALUE}'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
