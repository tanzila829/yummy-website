var express = require('express');
var router = express.Router();
const homeController=require('../controller/homeController');


/* GET home page. */
router.get('/', homeController.home);
router.get('/blog', homeController.blog);
router.get('/team', homeController.team);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);
router.get('/testimonial', homeController.testimonial);
router.get('/menu', homeController.menu);
router.get('/chefs', homeController.chefs);
router.get('/events', homeController.events);
router.get('/gallery', homeController.gallery);
module.exports = router;
