module.exports={
//team controller
team: (req, res, next) =>
res.render('backend/team/index', { title: 'List of team', layout: 'backend/layout' }),

create: (req, res, next) =>
res.render('index', { title: 'team Create', layout: 'backend/layout' }),

edit: (req, res, next) =>
res.render('index', { title: 'Edit Team', layout: 'backend/layout' }),

delete: (req, res, next) =>
res.render('index', { title: 'Team delete', layout: 'backend/layout' }),
show: (req, res, next) =>
res.render('index', { title: 'Team Show', layout: 'backend/layout' }),

store: (req, res, next) =>
res.render('index', { title: 'Team Store', layout: 'backend/layout' }),

update: (req, res, next) =>
res.render('index', { title: 'Team Update', layout: 'backend/layout' }),

}