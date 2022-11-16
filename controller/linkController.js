const { validationResult } = require('express-validator');

module.exports={

//contact-us controller

// admin: (req, res, next) =>{
// res.render('backend/index', { title: 'admin', layout: 'backend/layout' })
// },

link: (req, res, next) =>{
res.render('backend/index', { title: 'link', layout: 'backend/layout' })
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

    return res.json(req.body);
  //    res.render('index', { layout: 'backend/layout', });
   },

update: (req, res, next) =>{
res.render('index', { title: 'link update', layout: 'backend/layout' })
},


}