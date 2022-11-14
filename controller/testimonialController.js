module.exports={

//testimonial controller

testimonial: (req, res, next) =>
res.render('index', { title: 'List of Testimonial', layout: 'backend/layout' }),

create: (req, res, next) =>
res.render('index', { title: 'Testimonial Create', layout: 'backend/layout' }),

edit: (req, res, next) =>
res.render('index', { title: 'Edit Testimonial', layout: 'backend/layout' }),
delete: (req, res, next) =>
res.render('index', { title: 'Delete Testimonial', layout: 'backend/layout' }),
show: (req, res, next) =>
res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),

store: (req, res, next) =>
res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),

update: (req, res, next) =>
res.render('index', { title: 'Blog Create', layout: 'backend/layout' }),

}