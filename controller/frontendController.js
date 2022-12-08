// const config = require('../config/index')
// const HomeModel = require('../backendmodels/home');
const TeamModel = require('../models/team');


module.exports={
    home: (req, res, next) =>  {

         res.render('frontend/home', { title: 'home',  });
        
    },

   
    
    team: (req, res, next) =>{
       
        TeamModel.find((err, docs) => {
            if (err) {
                 res.json({ error: "Something went wrong! +err" })
            }
            // return res.json({blogs:docs});
            const team = [];
            docs.forEach(Element => {
                team.push({
                    name: Element.name,
                    designation: Element.designation,
                    image: Element.image,
                    facebook: Element.facebook,
                    twiter: Element.twiter,
                    instragram: Element.instragram,
                    linkedin: Element.linkedin,
                    id: Element._id
                })
            })
            res.render('frontend/team', { title: 'team ', team: team })

        });
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
    
    
    