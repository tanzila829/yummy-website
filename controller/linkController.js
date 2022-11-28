const { validationResult } = require('express-validator');
const LinkModel=require('../models/Link');
module.exports={

//contact-us controller

// admin: (req, res, next) =>{
// res.render('backend/index', { title: 'admin', layout: 'backend/layout' })
// },

link: (req, res, next) =>{
  LinkModel.find((err,docs)=>{
    if(err){
        return res.json({error:"Something went wrong!"+err})
    }
    return res.json({limk:docs});
});
res.render('backend/link/index', { title: 'link', layout: 'backend/layout' })
},

create: (req, res, next) =>{
res.render('backend/link/create', { title: 'link Create', layout: 'backend/layout' })
},
edit: (req, res, next) =>{
res.render('index', { title: 'link edit', layout: 'backend/layout' })
},

delete: (req, res, next) =>{
res.render('index', { title: 'link delete', layout: 'backend/layout' })
},
show: (req, res, next) =>{
res.render('index', { title: 'link show', layout: 'backend/layout' })
},
store: (req, res, next)=> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({error:errors.mapped()});
  }

// return res.json(req.body);

const Link=new LinkModel({
  facebook:req.body.facebook,
  twiter:req.body.facebook,
  instragram:req.body.instragram,
  linkedin:req.body.linkedin
});

Link.save((err,newLink)=>{
  if(err){
    return res.json({error:"Something went wrong!"+err})
  }
  return res.json({link:newLink});
});
},

update: (req, res, next) =>{
res.render('index', { title: 'link update', layout: 'backend/layout' })
},


}