const { validationResult } = require('express-validator');

module.exports={

//testimonial controller

// admin: (req, res, next) =>{
// res.render('backend/index', { title: 'admin', layout: 'backend/layout' })
// },

testimonial: (req, res, next) =>{
res.render('backend/index', { title: 'List of Testimonial', layout: 'backend/layout' })
},

create: (req, res, next) =>{
res.render('backend/testimonial/create', { title: 'Testimonial Create', layout: 'backend/layout' })
},

edit: (req, res, next) =>{
res.render('index', { title: 'Edit Testimonial', layout: 'backend/layout' })
},
delete: (req, res, next) =>{
res.render('index', { title: 'Delete Testimonial', layout: 'backend/layout' })
},
show: (req, res, next) =>{
res.render('index', { title: 'Blog Create', layout: 'backend/layout' })
},

store: (req, res, next)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({error:errors.mapped()});
    }

    return res.json(req.body);
    // res.render('index', { layout: 'backend/layout', });
  },


update: (req, res, next) =>{
res.render('index', { title: 'update', layout: 'backend/layout' })
},

}