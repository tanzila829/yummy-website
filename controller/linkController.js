const { validationResult } = require('express-validator');
const LinkModel = require('../models/link');
const fs = require("fs");
module.exports = {


    //link controller

    link: (req, res, next) => {
        //    link list 
        LinkModel.find((err, docs) => {
            if (err) {
                 res.json({ error: "Something went wrong! +err" })
            }
            // return res.json({blogs:docs});
            const link = [];
            docs.forEach(Element => {
              link.push({
                   
                    facebook: Element.facebook,
                    twiter: Element.twiter,
                    instragram: Element.instragram,
                    linkedin: Element.linkedin,
                    id: Element._id
                })
            })
            res.render('backend/link/index', { title: 'link ', layout: "backend/layout", link: link })

        });
    },

    create: (req, res, next) => {
        res.render('backend/link/create', { title: 'link  Create', layout: 'backend/layout' })
    },

    edit: (req, res, next) => {
        //json
        //json
        // res.json({'id':req.params.id});
        LinkModel.findById(req.params.id)
            .then((link) => {
                const details = {
                    
                    facebook: link.facebook,
                    twiter: link.twiter,
                    instragram: link.instragram,
                    linkedin: link.linkedin,
                    id: link._id

                }
                res.render('backend/link/edit', { title: 'link  Edit', layout: "backend/layout", link: details });
                // res.json({ "blog": blog });
            })
        // console.log(details);
    },

    delete: (req, res, next) => {

        LinkModel.findByIdAndRemove(req.params.id, (err, link) => {
            if (err) {
                console.log("Could not deleted.");

            }
            try {
                fs.unlink("public/" + link.image, () => {
                    console.log("File deleted");
                });
            } catch (error) {
                console.log("Something went wrong");
            }

            // /
            res.redirect("/admin/link");



        });
    },


    show: (req, res, next) => {
        //json
        // res.json({'id':req.params.id});
        LinkModel.findById(req.params.id)
            .then((link) => {

                // link list
                const details = {
                    
                    facebook: link.facebook,
                    twiter: link.twiter,
                    instragram: link.instragram,
                    linkedin: link.linkedin,
                }
                // console.log(details);
                res.render('backend/link/show', { title: 'link', layout: "backend/layout", link: details });
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
        // sampleFile = req.files.image;
        // let rnd = new Date().valueOf();
        // let filePath = 'upload/' + rnd + sampleFile.name;

        // // Use the mv() method to place the file somewhere on your server
        // sampleFile.mv('public/' + filePath, function (err) {
        //     if (err)
        //          res.status(500).send(err);
        //     res.send('File uploaded!');
        // });


        // return res.json(req.body);

        const link = new LinkModel({
            
            facebook: req.body.facebook,
            twiter: req.body.twiter,
            instragram: req.body.instragram,
            linkedin: req.body.linkedin,
            id: req.body._id,
            // image: filePath
        });

        link.save((err, newLink) => {
            if (err) {
                 res.json({ error: "Something went wrong!" + err })
            }
            // return res.json({ team : newTeam });
        });


    },



    update: (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
             res.json({ errors: errors.mapped() });
        }
        // let sampleFile, filePath;

        // if (req.files) {
        //     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        //     sampleFile = req.files.image;
        //     let rnd = new Date().valueOf();
        //     filePath = 'upload/' + rnd + sampleFile.name;
        //     // Use the mv() method to place the file somewhere on yo
        //     sampleFile.mv('public/' + filePath, function (err) {
        //         if (err)
        //             res.redirect("/admin/team/" + req.params.id + "/edit");
        //     });
        // }
        const linkObj = {
            
            facebook: req.body.facebook,
            twiter: req.body.twiter,
            instragram: req.body.instragram,
            linkedin: req.body.linkedin,
            id: req.body._id,
        };

        // if (filePath) {
        //     teamObj.image = filePath;
        // }

        // /
        LinkModel.findByIdAndUpdate(req.params.id, linkObj, (err) => {
            if (err) {
                res.redirect("/admin/link/" + req.params.id + "/edit");
            }
            res.redirect("/admin/link");
        });

    }
}