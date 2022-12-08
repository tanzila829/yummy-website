const { validationResult } = require('express-validator');
const TestimonialModel = require('../models/Testimonial');
const fs = require("fs");
module.exports = {


    //blog controller

    testimonial: (req, res, next) => {
        //    testimonial list 
      TestimonialModel.find((err, docs) => {
            if (err) {
                 res.json({ error: "Something went wrong! +err" })
            }
            // return res.json({blogs:docs});
            const testimonial = [];
            docs.forEach(Element => {
              testimonial.push({
                name: Element.name,
                    details: Element.details,
                    image: Element.image,
                   designation: Element.designation,
                    id: Element._id
                })
            })
            res.render('backend/testimonial/index', { title: 'testimonial', layout: "backend/layout", testimonial: testimonial })

        });
    },

    create: (req, res, next) => {
        res.render('backend/testimonial/create', { title: 'testimonial Create', layout: 'backend/layout' })
    },

    edit: (req, res, next) => {
        //json
        //json
        // res.json({'id':req.params.id});
        TestimonialModel.findById(req.params.id)
            .then((testimonial) => {
                const details = {
                  name: testimonial.name,
                    designation: testimonial.designation,
                    id: testimonial._id,
                    details: testimonial.details,
                    image: testimonial.image
                }
                res.render('backend/testimonial/edit', { title: 'testimonial Edit', layout: "backend/layout", testimonial: details });
                // res.json({ "blog": blog });
            })
        // console.log(details);
    },

    delete: (req, res, next) => {

        TestimonialModel.findByIdAndRemove(req.params.id, (err, testimonial) => {
            if (err) {
                console.log("Could not deleted.");

            }
            try {
                fs.unlink("public/" + testimonial.image, () => {
                    console.log("File deleted");
                });
            } catch (error) {
                console.log("Something went wrong");
            }

            // /
            res.redirect("/admin/testimonial");



        });
    },


    show: (req, res, next) => {
        //json
        // res.json({'id':req.params.id});
        TestimonialModel.findById(req.params.id)
            .then((testimonial) => {

                // blog list
                const details = {
                  name: testimonial.name,
                    designation: testimonial.designation,
                    details: testimonial.details,
                    image: testimonial.image
                }
                // console.log(details);
                res.render('backend/testimonial/show', { title: 'testimonial', layout: "backend/layout", testimonial: details });
            })
            .catch((err) => {
                res.json({ "error": "Somethiong went wrong!" });
            })


    },

    store: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.json({ error: errors.mapped() });
        }
        let sampleFile;
        if (!req.files || Object.keys(req.files).length === 0) {
             res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        sampleFile = req.files.image;
        let rnd = new Date().valueOf();
        let filePath = 'upload/' + rnd + sampleFile.name;

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('public/' + filePath, function (err) {
            if (err)
                 res.status(500).send(err);
            // res.send('File uploaded!');
        });


        // return res.json(req.body);

        const testimonial = new TestimonialModel({
          name: req.body.name,
            designation: req.body.designation,
            details: req.body.details,
            image: filePath
        });

        testimonial.save((err, newTestimonial) => {
            if (err) {
                 res.json({ error: "Something went wrong!" + err })
            }
            res.redirect('/admin/testimonial')
            // return res.json({ blog: newBlog });
        });


    },



    update: (req, res, next) => {
        const errors=validationResult(req);

        if(!errors.isEmpty()){
             res.json({errors:errors.mapped()});
        }
        let sampleFile,filePath;

        if (req.files) {
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            sampleFile = req.files.image;
            let rnd=new Date().valueOf();
            filePath='upload/' +rnd+sampleFile.name;
            // Use the mv() method to place the file somewhere on yo
            sampleFile.mv('public/'+filePath, function(err) {
                if (err)
                res.redirect("/admin/testimonial/"+req.params.id+"/edit");
            });
        }
        const testimonialObj={
            name:req.body.name,
            designation:req.body.designation,
            details:req.body.details
        };

        if(filePath){
          testimonialObj.image=filePath;
        }

        // /
        TestimonialModel.findByIdAndUpdate(req.params.id,testimonialObj,(err)=>{
            if(err){
                res.redirect("/admin/testimonial/"+req.params.id+"/edit");
            }
            res.redirect("/admin/testimonial");
        });

}
    }