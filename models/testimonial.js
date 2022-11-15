const mongoose=require("mongoose");
const testimonialsSchema= new mongoose.Schema({
    name:{
        type:string,
        required:true,
    },
    details:{
        type:string,
        required:true,
    },
    image:{
       type:string,
       required:false,
    },
    designation:{
        type:string,
        required:true,
    },
});
const testimonials= mongoose.model("testimonials", testimonialsSchema);

module.exports= testimonials;