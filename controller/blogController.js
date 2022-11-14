module.exports={

    //admin  controller
    admin: (req, res, next) =>
        res.render('backend/index', { title: 'admin', layout: 'backend/layout'}),
    
        //blog controller

    blog: (req, res, next) =>
        res.render('backend/index', { title: 'Blog', layout: 'backend/layout'}),

    create: (req, res, next) =>
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' }),
   
    edit: (req, res, next) =>
        res.render('index', { title: 'Blog edit', layout: 'backend/layout' }),
   
    delete: (req, res, next) =>
        res.render('index', { title: 'Blog delete', layout: 'backend/layout' }),
    show: (req, res, next) =>
        res.render('index', { title: 'Blog show', layout: 'backend/layout' }),
    
    store: (req, res, next) =>
       {
        return res.json(req.body)
       },

    update: (req, res, next) =>
        res.render('index', { title: 'Update Blog', layout: 'backend/layout' }),
}