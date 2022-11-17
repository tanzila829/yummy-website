const mongoose=require("mongoose");
const ContactSchema= new mongoose.Schema({
    title:{
        type:"string",
        required:true,
    },
    details:{
        type:"string",
        required:true,
    },
    
    icon:{
        type:"string",
        required:true,
    },
   
});
const Contact= mongoose.model("Contact", ContactSchema);

module.exports= Contact;