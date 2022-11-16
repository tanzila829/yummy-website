module.exports={

    //Dashboard controller
    
    admin: (req, res, next) =>{
    res.render('backend/index', { title: 'Dashboard', layout: 'backend/layout' })
    },
}