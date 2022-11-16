const mongoose=require("mongoose");
const BlogSchema= new mongoose.Schema({
    title:{
        type:"string",
        required:true,
    },
    details:{
        type:"string",
        required:true,
    },
    image:{
       type:"string",
       required:false,
    },
    slug:{
        type:"string",
        required:true,
    },
});
const Blog= mongoose.model("Blog", BlogSchema);

module.exports= Blog;