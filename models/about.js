const mongoose=require("mongoose");
const aboutSchema= new mongoose.Schema({
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
        required:true
    },
    image:{
       type:string,
       required:false,
    },
   
});
const about= mongoose.model("about", aboutSchema);

module.exports= about;