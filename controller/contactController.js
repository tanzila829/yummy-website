const { validationResult } = require('express-validator');
const ContactModel=require('../models/Contact');
module.exports={

//contact-us controller

// admin: (req, res, next) =>{
// res.render('backend/index', { title: 'admin', layout: 'backend/layout' })
// },



contact: (req, res, next) =>{
  ContactModel.find((err,docs)=>{
    if(err){
        return res.json({error:"Something went wrong!"+err})
    }
    return res.json({contact:docs});
});

res.render('backend/contact/index', { title: 'contact', layout: 'backend/layout' })
},

create: (req, res, next) =>{
res.render('backend/contact/create', { title: 'create', layout: 'backend/layout' })
},

edit: (req, res, next) =>{
res.render('index', { title: 'edit', layout: 'backend/layout' })
},

delete: (req, res, next) =>{
res.render('index', { title: 'delete', layout: 'backend/layout' })
},
show: (req, res, next) =>{
res.render('index', { title: 'show', layout: 'backend/layout' })
},
store: (req, res, next)=> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({error:errors.mapped()});
  }

// return res.json(req.body);

const contact=new ContactModel({
  title:req.body.title,
  details:req.body.details,
  icon:req.body.icon
});

contact.save((err,newContact)=>{
  if(err){
    return res.json({error:"Something went wrong!"+err})
  }
  return res.json({contact:newContact});
});

},

update: (req, res, next) =>{
res.render('index', { title: 'update', layout: 'backend/layout' })
},


}