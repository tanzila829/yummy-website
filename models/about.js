const mongoose=require("mongoose");
const AboutSchema= new mongoose.Schema({
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
   
});
const About= mongoose.model("About", AboutSchema);

module.exports= About;