const mongoose=require("mongoose");
const BlogSchema= new mongoose.Schema({
    title:{
        type:string,
        required:true,
    },
    details:{
        type:string,
        required:true,
    },
    map:{
       type:string,
       required:true,
    },
    image:{
        type:string,
        required:true,
    },
   
});
const contact= mongoose.model("contact", contactSchema);

module.exports= contact;