import mongoose, { models } from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
    },
    email: {
        type: String,
        required: [true, "User Email is required"],
        unique: true,
    },
    profileImage: {
        type: String,
        default: "",
    },
},{
    timestamps: true,
})


const User =  models.User || mongoose.model("User",userSchema);

export default User;