const mongoose=require("mongoose");
const HomeSchema= new mongoose.Schema({
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
   link:{
        type:"string",
        required:true,
    },
});
const Home= mongoose.model("Home", HomeSchema);

module.exports= Home;