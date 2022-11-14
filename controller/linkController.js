module.exports={

//contact-us controller

link: (req, res, next) =>
res.render('index', { title: 'link', layout: 'backend/layout' }),

create: (req, res, next) =>
res.render('index', { title: 'link Create', layout: 'backend/layout' }),
edit: (req, res, next) =>
res.render('index', { title: 'link edit', layout: 'backend/layout' }),

delete: (req, res, next) =>
res.render('index', { title: 'link delete', layout: 'backend/layout' }),
show: (req, res, next) =>
res.render('index', { title: 'link show', layout: 'backend/layout' }),

store: (req, res, next) =>
res.render('index', { title: 'link store', layout: 'backend/layout' }),

update: (req, res, next) =>
res.render('index', { title: 'link update', layout: 'backend/layout' }),


}