const { validationResult } = require('express-validator');
const AboutModel = require('../models/About');
const fs = require("fs");
module.exports = {



    about: (req, res, next) => {
        AboutModel.find((err, docs) => {
            if (err) {
                // return res.json({ error: "Something went wrong! +err" })
            }
            // return res.json({blogs:docs});
            const about = [];
            docs.forEach(Element => {
                about.push({
                    title: Element.title,
                    details: Element.details,
                    image: Element.image,
                    id: Element._id
                })
            })
            res.render('backend/about/index', { title: 'about', layout: "backend/layout", about: about })

        });
    },
    create: (req, res, next) => {
        res.render('backend/about/create', { title: 'create', layout: 'backend/layout' })
    },

   
    edit: (req, res, next) => {
        //json
        //json
        // res.json({'id':req.params.id});
        AboutModel.findById(req.params.id)
            .then((about) => {
                const details = {
                    title: about.title,
                   
                    id: about._id,
                    details: about.details,
                    image: about.image
                }
                res.render('backend/about/edit', { title: 'about Edit', layout: "backend/layout", about: details });
            
            })
        // console.log(details);
    },

    delete: (req, res, next) => {

        AboutModel.findByIdAndRemove(req.params.id, (err, about) => {
            if (err) {
                console.log("Could not deleted.");

            }
            try {
                fs.unlink("public/" + contact.image, () => {
                    console.log("File deleted");
                });
            } catch (error) {
                console.log("Something went wronng");
            }

            // /
            res.redirect("/admin/about");



        });
    },



    show: (req, res, next) => {
        //json
        // res.json({'id':req.params.id});
        AboutModel.findById(req.params.id)
            .then((about) => {

               
                const details = {
                    title: about.title,
                    details: about.details,
                    image: about.image
                }
                // console.log(details);
                res.render('backend/about/show', { title: 'about', layout: "backend/layout", about: details });
            })

    },
    store: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.json({ errors: errors.mapped() });
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

            res.send('File uploaded!');
        });
        const about = new AboutModel({
            image: filePath,
            title: req.body.title,
            details: req.body.details
        })

        about.save((err, newAbout) => {
            if (err) {
                 res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ contact: newContact });
        });


    },



    update: (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
             res.json({ errors: errors.mapped() });
        }
        let sampleFile, filePath;

        if (req.files) {
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            sampleFile = req.files.image;
            let rnd = new Date().valueOf();
            filePath = 'upload/' + rnd + sampleFile.name;
            // Use the mv() method to place the file somewhere on yo
            sampleFile.mv('public/' + filePath, function (err) {
                if (err)
                    res.redirect("/admin/about/" + req.params.id + "/edit");
            });
        }
        const aboutObj = {
            title: req.body.title,

            details: req.body.details
        };

        if (filePath) {
            aboutObj.image = filePath;
        }

        // /
     AboutModel.findByIdAndUpdate(req.params.id, aboutObj, (err) => {
            if (err) {
                res.redirect("/admin/about/" + req.params.id + "/edit");
            }
            res.redirect("/admin/about");
        });

    }
}