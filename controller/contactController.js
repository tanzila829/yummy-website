module.exports={

//contact-us controller

contact: (req, res, next) =>
res.render('index', { title: 'contact', layout: 'backend/layout' }),

create: (req, res, next) =>
res.render('index', { title: 'create', layout: 'backend/layout' }),

edit: (req, res, next) =>
res.render('index', { title: 'edit', layout: 'backend/layout' }),

delete: (req, res, next) =>
res.render('index', { title: 'delete', layout: 'backend/layout' }),
show: (req, res, next) =>
res.render('index', { title: 'show', layout: 'backend/layout' }),

store: (req, res, next) =>
res.render('index', { title: 'store', layout: 'backend/layout' }),

update: (req, res, next) =>
res.render('index', { title: 'update', layout: 'backend/layout' }),


}