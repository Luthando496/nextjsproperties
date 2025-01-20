import mongoose,{models} from "mongoose";


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post Title is required"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Post Description is required"],
    },
    postImage: {
        type: String,
        required: [true, "Post Image is required"],
    },
    tags: {
        type: Array,
        required: [true, "Post Tags is required"],
    },
    category:{
        type: String,
        required: [true, "Post Category is required"],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Post Author is required"],
    },
},{
    timestamps: true,
})



const Post = models.Post || mongoose.model("Post", postSchema);

export default Post;