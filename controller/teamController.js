const { validationResult } = require('express-validator');

module.exports={
//team controller
admin: (req, res, next) =>{
res.render('backend/index', { title: 'admin', layout: 'backend/layout' })
},
team: (req, res, next) =>{
  res.render('backend/index', { title: 'team', layout: 'backend/layout' })
  },

create: (req, res, next) =>{
res.render('backend/team/create', { title: 'team Create', layout: 'backend/layout' })
},
edit: (req, res, next) =>{
res.render('index', { title: 'Edit Team', layout: 'backend/layout' })
},

delete: (req, res, next) =>{
res.render('index', { title: 'Team delete', layout: 'backend/layout' })
},
show: (req, res, next) =>{
res.render('index', { title: 'Team Show', layout: 'backend/layout' })
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
res.render('index', { title: 'Team Update', layout: 'backend/layout' })

},
}