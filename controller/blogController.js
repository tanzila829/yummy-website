const { validationResult } = require('express-validator');
const BlogModel = require('../models/Blog');
const fs = require("fs");
module.exports = {


    //blog controller

    blog: (req, res, next) => {
        //    Blog list 
        BlogModel.find((err, docs) => {
            if (err) {
                return res.json({ error: "Something went wrong! +err" })
            }
            // return res.json({blogs:docs});
            const blog = [];
            docs.forEach(Element => {
                blog.push({
                    title: Element.title,
                    details: Element.details,
                    image: Element.image,
                    id: Element._id
                })
            })
            res.render('backend/blog/index', { title: 'Blogs', layout: "backend/layout", blog: blog })

        });
    },

    create: (req, res, next) => {
        res.render('backend/blog/create', { title: 'Blog Create', layout: 'backend/layout' })
    },

    edit: (req, res, next) => {
        //json
        //json
        // res.json({'id':req.params.id});
        BlogModel.findById(req.params.id)
            .then((blog) => {
                const details = {
                    title: blog.title,
                    slug: blog.slug,
                    id: blog._id,
                    details: blog.details,
                    image: blog.image
                }
                res.render('backend/blog/edit', { title: 'Blog Edit', layout: "backend/layout", blog: details });
                // res.json({ "blog": blog });
            })
        // console.log(details);
    },

    delete: (req, res, next) => {

        BlogModel.findByIdAndRemove(req.params.id, (err, blog) => {
            if (err) {
                console.log("Could not deleted.");

            }
            try {
                fs.unlink("public/" + blog.image, () => {
                    console.log("File deleted====================================");
                });
            } catch (error) {
                console.log("Something went wrong====================================");
            }

            // /
            res.redirect("/admin/blog");



        });
    },


    show: (req, res, next) => {
        //json
        // res.json({'id':req.params.id});
        BlogModel.findById(req.params.id)
            .then((blog) => {

                // blog list
                const details = {
                    title: blog.title,
                    slug: blog.slug,
                    details: blog.details,
                    image: blog.image
                }
                // console.log(details);
                res.render('backend/blog/show', { title: 'Blog', layout: "backend/layout", blog: details });
            })
            .catch((err) => {
                res.json({ "error": "Somethiong went wrong!" });
            })


    },

    store: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ error: errors.mapped() });
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


        // return res.json(req.body);

        const blog = new BlogModel({
            title: req.body.title,
            slug: req.body.slug,
            details: req.body.details,
            image: filePath
        });

        blog.save((err, newBlog) => {
            if (err) {
                return res.json({ error: "Something went wrong!" + err })
            }
            return res.json({ blog: newBlog });
        });


    },



    update: (req, res, next) => {
        const errors=validationResult(req);

        if(!errors.isEmpty()){
            return res.json({errors:errors.mapped()});
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
                res.redirect("/admin/blog/"+req.params.id+"/edit");
            });
        }
        const blogObj={
            title:req.body.title,
            slug:req.body.slug,
            details:req.body.details
        };

        if(filePath){
            blogObj.image=filePath;
        }

        // /
        BlogModel.findByIdAndUpdate(req.params.id,blogObj,(err)=>{
            if(err){
                res.redirect("/admin/blog/"+req.params.id+"/edit");
            }
            res.redirect("/admin/blog");
        });

}
    }