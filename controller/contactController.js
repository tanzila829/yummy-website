const { validationResult } = require('express-validator');
const ContactModel = require('../models/Contact');
const fs = require("fs");
module.exports = {



    contact: (req, res, next) => {
        ContactModel.find((err, docs) => {
            if (err) {
                // return res.json({ error: "Something went wrong! +err" })
            }
            // return res.json({blogs:docs});
            const contact = [];
            docs.forEach(Element => {
                contact.push({
                    title: Element.title,
                    details: Element.details,
                    image: Element.image,
                    id: Element._id
                })
            })
            res.render('backend/contact/index', { title: 'contact', layout: "backend/layout", contact: contact })

        });
    },
    create: (req, res, next) => {
        res.render('backend/contact/create', { title: 'create', layout: 'backend/layout' })
    },

   
    edit: (req, res, next) => {
        //json
        //json
        // res.json({'id':req.params.id});
        ContactModel.findById(req.params.id)
            .then((contact) => {
                const details = {
                    title: contact.title,
                   
                    id: contact._id,
                    details: contact.details,
                    image: contact.image
                }
                res.render('backend/contact/edit', { title: 'Blog Edit', layout: "backend/layout", contact: details });
            
            })
        // console.log(details);
    },

    delete: (req, res, next) => {

        ContactModel.findByIdAndRemove(req.params.id, (err, contact) => {
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
            res.redirect("/admin/contact");



        });
    },



    show: (req, res, next) => {
        //json
        // res.json({'id':req.params.id});
        ContactModel.findById(req.params.id)
            .then((contact) => {

               
                const details = {
                    title: contact.title,
                    details: contact.details,
                    image: contact.image
                }
                // console.log(details);
                res.render('backend/contact/show', { title: 'contact', layout: "backend/layout", contact: details });
            })

    },
    store: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
        }

        let sampleFile;
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        sampleFile = req.files.image;
        let rnd = new Date().valueOf();
        let filePath = 'upload/' + rnd + sampleFile.name;

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('public/' + filePath, function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!');
        });
        const contact = new ContactModel({
            image: filePath,
            title: req.body.title,
            details: req.body.details
        })

        contact.save((err, newContact) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ contact: newContact });
        });


    },



    update: (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
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
                    res.redirect("/admin/contact/" + req.params.id + "/edit");
            });
        }
        const contactObj = {
            title: req.body.title,

            details: req.body.details
        };

        if (filePath) {
            contactObj.image = filePath;
        }

        // /
        ContactModel.findByIdAndUpdate(req.params.id, contactObj, (err) => {
            if (err) {
                res.redirect("/admin/contact/" + req.params.id + "/edit");
            }
            res.redirect("/admin/contact");
        });

    }
}