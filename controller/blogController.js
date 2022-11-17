const { validationResult } = require('express-validator');
const BlogModel=require('../models/Blog');
module.exports={

    // //admin  controller
    // admin: (req, res, next) =>{

    //   res.render('backend/index', { title: 'admin', layout: 'backend/layout'})
    // },
    
        //blog controller

    blog: (req, res, next) =>{
        BlogModel.find((err,docs)=>{
            if(err){
                return res.json({error:"Something went wrong!"+err})
            }
            return res.json({blog:docs});
    });
    

        res.render('backend/blog/index', { title: 'Blog', layout: 'backend/layout'})
    
},

    create: (req, res, next) =>{
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' })
    },
   
    edit: (req, res, next) =>{
        res.render('index', { title: 'Blog edit', layout: 'backend/layout' })
    },
   
    delete: (req, res, next) =>{
        res.render('index', { title: 'Blog delete', layout: 'backend/layout' })
    },
    show: (req, res, next) =>{
        res.render('index', { title: 'Blog show', layout: 'backend/layout' })
    },
    
        store: (req, res, next)=> {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.json({error:errors.mapped()});
            }
        
        // return res.json(req.body);
        
          const blog=new BlogModel({
            title:req.body.title,
            slug:req.body.slug,
            details:req.body.details,
            image:req.body.image
        });
    
        blog.save((err,newBlog)=>{
            if(err){
              return res.json({error:"Something went wrong!"+err})
            }
            return res.json({blog:newBlog});
        });
    },



    update: (req, res, next) =>{
        res.render('index', { title: 'Update Blog', layout: 'backend/layout' })
    },
}
