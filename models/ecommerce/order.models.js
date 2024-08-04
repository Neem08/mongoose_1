import mongoose from 'mongoose'

const orderItemsSchema = new mongoose.Schema({
    productId:{
      type: mongoose.Schema.types.OrderId,
      ref: "Product"
    },
    quantity:{
        type:number, required:true
    }

},{timestamps:true});

const orderSchema = new mongoose.Schema ({
    orderPrice:{
        type:Number,
        required:true,

    },
    customer :{
        type:mongoose.Schema.types.ObjectId,
        ref:"User"
    },
    orderItems :{
    type:[orderItemsSchema]

    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","cancelled","delivered"],
        default: "pending"
    }
},{timestamps:true})
export const Order = mongoose.model("Order",orderSchema)