// const config = require('../config/index')

module.exports={
    home: (req, res, next) =>{
 
        res.render('frontend/index', { title: 'home' })
    },
    
    team: (req, res, next) =>{
        res.render('frontend/team', { title: 'Meet our team' })
    },

    blog: (req, res, next) =>{
        res.render('frontend/blog', { title: 'Read Our Blog' })
    },
   
    contact: (req, res, next) =>{
        res.render('frontend/contact', { title: 'Contact with us' })
    },
   
    about: (req, res, next) =>{
        res.render('frontend/about', { title: 'About Us' })
    },
    
    testimonial: (req, res, next) =>{
        res.render('frontend/testimonial', { title: 'testimonial' })
    },
    menu: (req, res, next) =>{
        res.render('frontend/menu', { title: 'menu' })
    },
    events: (req, res, next) =>{
        res.render('frontend/events', { title: 'events' })
    },
    chefs: (req, res, next) =>{
        res.render('frontend/chefs', { title: 'chefs' })
    },
    gallery: (req, res, next) =>{
        res.render('frontend/gallery', { title: 'gallery' })
        

    },
    // about: (req, res, next) =>{
    //     res.render('frontend/about', { title: 'about' })
        

    // },
}
    
    
    