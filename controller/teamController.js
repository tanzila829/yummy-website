const { validationResult } = require('express-validator');
const TeamModel = require('../models/team');
const fs = require("fs");
module.exports = {

    //blog controller
    team: (req, res, next) => {
       
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
            res.render('backend/team/index', { title: 'team ', layout: "backend/layout", team: team })

        });
    },

    create: (req, res, next) => {
        res.render('backend/team/create', { title: 'team  Create', layout: 'backend/layout' })
    },

    edit: (req, res, next) => {
        //json
        //json
        // res.json({'id':req.params.id});
        TeamModel.findById(req.params.id)
            .then((team) => {
                const details = {
                    name: team.name,
                    designation: team.designation,
                    image: team.image,
                    facebook: team.facebook,
                    twiter: team.twiter,
                    instragram: team.instragram,
                    linkedin: team.linkedin,
                    id: team._id

                }
                res.render('backend/team/edit', { title: 'team  Edit', layout: "backend/layout", team: details });
                // res.json({ "blog": blog });
            })
        // console.log(details);
    },

    delete: (req, res, next) => {

        TeamModel.findByIdAndRemove(req.params.id, (err, team) => {
            if (err) {
                console.log("Could not deleted.");

            }
            try {
                fs.unlink("public/" + team.image, () => {
                    console.log("File deleted");
                });
            } catch (error) {
                console.log("Something went wrong");
            }

            // /
            res.redirect("/admin/team");



        });
    },


    show: (req, res, next) => {
        //json
        // res.json({'id':req.params.id});
        TeamModel.findById(req.params.id)
            .then((team) => {

                // blog list
                const details = {
                    name: team.name,
                    designation: team.designation,
                    image: team.image,
                    facebook: team.facebook,
                    twiter: team.twiter,
                    instragram: team.instragram,
                    linkedin: team.linkedin,
                }
                // console.log(details);
                res.render('backend/team/show', { title: 'team', layout: "backend/layout", team: details });
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
            res.send('File uploaded!');
        });


        // return res.json(req.body);

        const team = new TeamModel({
            name: req.body.name,
            designation: req.body.designation,
            facebook: req.body.facebook,
            twiter: req.body.twiter,
            instragram: req.body.instragram,
            linkedin: req.body.linkedin,
            id: req.body._id,
            image: filePath
        });

        team.save((err, newTeam) => {
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
        let sampleFile, filePath;

        if (req.files) {
            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
            sampleFile = req.files.image;
            let rnd = new Date().valueOf();
            filePath = 'upload/' + rnd + sampleFile.name;
            // Use the mv() method to place the file somewhere on yo
            sampleFile.mv('public/' + filePath, function (err) {
                if (err)
                    res.redirect("/admin/team/" + req.params.id + "/edit");
            });
        }
        const teamObj = {
            name: req.body.name,
            designation: req.body.designation,
            facebook: req.body.facebook,
            twiter: req.body.twiter,
            instragram: req.body.instragram,
            linkedin: req.body.linkedin,
            id: req.body._id,
        };

        if (filePath) {
            teamObj.image = filePath;
        }

        // /
        TeamModel.findByIdAndUpdate(req.params.id, teamObj, (err) => {
            if (err) {
                res.redirect("/admin/team/" + req.params.id + "/edit");
            }
            res.redirect("/admin/team");
        });

    }
}