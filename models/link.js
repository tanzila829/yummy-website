const mongoose=require("mongoose");
const LinkSchema= new mongoose.Schema({
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
const Link= mongoose.model("Link", LinkSchema);

module.exports= Link;