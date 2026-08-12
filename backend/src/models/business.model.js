import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({

    name:String,

    description:String,

    active:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true
})

export default mongoose.model("Business", BusinessSchema);