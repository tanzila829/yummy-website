const mongoose=require("mongoose");
const TeamSchema= new mongoose.Schema({
    name:{
        type:"string",
        required:true,
    },
    designation:{
        type:"string",
        required:true,
    },
    image:{
       type:"string",
       required:false,
    },
    facebook:{
        type:"string",
        required:false,
    },
    twiter:{
        type:"string",
        required:false,

    },
    instragram:{
        type:"string",
        required:false,

    },
    linkedIn:{
        type:"string",
        required:false,

    },
});
const Team= mongoose.model("Team", TeamSchema);

module.exports= Team;