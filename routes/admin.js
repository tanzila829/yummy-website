var express = require('express');
var router = express.Router();
const blogController = require('../controller/blogController');
const contactController=require('../controller/contactController');
const teamController=require('../controller/teamController');
const testimonialController=require('../controller/testimonialController');
const linkController=require('../controller/linkController');



/* GET blog page. */
router.get('/', blogController.admin);
router.get('/blog', blogController.blog);
router.get('/blog/create', blogController.create);
router.get('/blog/:id/edit', blogController.edit);
router.delete('/blog/:id/delete', blogController.delete);
router.get('/blog/:id/show', blogController.show);
router.post('/blog/store', blogController.store);
router.put('/blog/:id/update', blogController.update);


//contactpage
router.get('/contact', contactController.contact);
router.get('/contact/create', contactController.create);
router.get('/contact/:id/edit', contactController.edit);
router.delete('/contact/:id/delete', contactController.delete);
router.get('/contact/:id/show', contactController.show);
router.post('/contact/:id/store', contactController.store);
router.put('/contact/:id/update', contactController.update);


//teampage
router.get('/team', teamController.team);
router.get('/team/create', teamController.create);
router.get('/team/:id/edit', teamController.edit);
router.delete('/team/:id/delete', teamController.delete);
router.get('/team/:id/show', teamController.show);
router.post('/team/:id/store', teamController.store);
router.put('/team/:id/update', teamController.update);



//testmonialpage
router.get('/testimonial', testimonialController.testimonial);
router.get('/testimonial/create', testimonialController.create);
router.get('/testimonial/:id/edit', testimonialController.edit);
router.delete('/testimonial/:id/delete', testimonialController.delete);
router.get('/testimonial/:id/show', testimonialController.show);
router.post('/testimonial/:id/store',testimonialController.store);
router.put('/testimonial/:id/update', testimonialController.update);


//linkpage
router.get('/link', linkController.link);
router.get('/link/create', linkController.create);
router.get('/link/:id/edit', linkController.edit);
router.delete('/link/:id/delete', linkController.delete);
router.get('/link/:id/show', linkController.show);
router.post('/link/:id/store',linkController.store);
router.put('/link/:id/update', linkController.update);







module.exports = router;