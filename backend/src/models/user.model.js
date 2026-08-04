import mongoose from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["admin","user"],
        default: "admin"
    }

},{
    timestamps:true
})

export default mongoose.model("User", userSchema);