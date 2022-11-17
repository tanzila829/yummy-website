const mongoose=require("mongoose");
const TestimonialsSchema= new mongoose.Schema({
    name:{
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
    designation:{
        type:"string",
        required:true,
    },
});
const Testimonials= mongoose.model("Testimonials", TestimonialsSchema);

module.exports= Testimonials;