const { validationResult } = require('express-validator');
const BlogModel=require('../models/Blog');
module.exports={

    
        //blog controller

    blog: (req, res, next) =>{
        BlogModel.find((err,docs)=>{
            if(err){
                return res.json({error:"Something went wrong!"+err})
            }
            const blog=[];
            docs.forEach(element=>{
                blog.push({
                    title:element.title,
                    details:element.details,
                    id:element._id
                })
            })



            // return res.json({blog:docs});
    });
    

        res.render('backend/blog/index', { title: 'Blog', layout: 'backend/layout',blog:docs})
    
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
            let sampleFile;
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        sampleFile = req.files.image;
        let rnd=new Date().valueOf();
        let filePath='upload/' +rnd+sampleFile.name;
      
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('public/'+filePath,function(err){
            if(err)
            return res.status(500).send(err);
            res.send('File uploaded!');
        });

        
        // return res.json(req.body);
        
          const blog=new BlogModel({
            title:req.body.title,
            slug:req.body.slug,
            details:req.body.details,
            image:filePath
        });
    
        blog.save((err,newBlog)=>{
            if(err){
              return res.json({error:"Something went wrong!"+err})
            }
   
        });
    },



    update: (req, res, next) =>{
        res.render('index', { title: 'Update Blog', layout: 'backend/layout' })
    },
}
