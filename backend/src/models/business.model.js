import mongoose from "mongoose";

const BusinessSchema = new Schema({

    name:String,

    description:String,

    logo:String,

    active:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true
})

export default mongoose.model("Business", BusinessSchema);