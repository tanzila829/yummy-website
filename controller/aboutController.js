const { validationResult } = require('express-validator');
const AboutModel=require('../models/About');
module.exports={

    // //admin  controller
    // admin: (req, res, next) =>{

    //   res.render('backend/index', { title: 'admin', layout: 'backend/layout'})
    // },
    
        //about controller

    about: (req, res, next) =>{
        AboutModel.find((err,docs)=>{
            if(err){
                return res.json({error:"Something went wrong!"+err})
            }
            return res.json({about:docs});
    });
    

        res.render('backend/about/index', { title: 'about', layout: 'backend/layout'})
    
},

    create: (req, res, next) =>{
        res.render('backend/about/create', { title: 'Blog Create', layout: 'backend/layout' })
    },
   
    edit: (req, res, next) =>{
        res.render('index', { title: 'about edit', layout: 'backend/layout' })
    },
   
    delete: (req, res, next) =>{
        res.render('index', { title: 'about delete', layout: 'backend/layout' })
    },
    show: (req, res, next) =>{
        res.render('index', { title: 'about show', layout: 'backend/layout' })
    },
    
        store: (req, res, next)=> {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.json({error:errors.mapped()});
            }
        
        // return res.json(req.body);
        
          const about=new AboutModel({
            title:req.body.title,
            details:req.body.details,
            image:req.body.image
        });
    
        about.save((err,newAbout)=>{
            if(err){
              return res.json({error:"Something went wrong!"+err})
            }
            return res.json({about:newAbout});
        });
    },



    update: (req, res, next) =>{
        res.render('index', { title: 'Update Blog', layout: 'backend/layout' })
    },
}
