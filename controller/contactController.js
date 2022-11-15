const { validationResult } = require('express-validator');

module.exports={

//contact-us controller

admin: (req, res, next) =>{
res.render('backend/index', { title: 'admin', layout: 'backend/layout' })
},



contact: (req, res, next) =>{
res.render('backend/index', { title: 'contact', layout: 'backend/layout' })
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

    return res.json(req.body);
  //    res.render('index', { layout: 'backend/layout', });
   },

update: (req, res, next) =>{
res.render('index', { title: 'update', layout: 'backend/layout' })
},


}