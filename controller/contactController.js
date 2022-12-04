const { validationResult } = require('express-validator');
const ContactModel=require('../models/Contact');
// const fs = require("fs");
module.exports={



contact: (req, res, next) =>{
  ContactModel.find((err, docs) => {
    if (err) {
        return res.json({ error: "Something went wrong! +err" })
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
create: (req, res, next) =>{
res.render('backend/contact/create', { title: 'create', layout: 'backend/layout' })
},

edit: (req, res, next) =>{
res.render('index', { title: 'edit', layout: 'backend/layout' })
},

delete: (req, res, next) =>{
res.render('index', { title: 'delete', layout: 'backend/layout' })
},
show: (req, res, next) => {
  //json
  // res.json({'id':req.params.id});
  ContactModel.findById(req.params.id)
      .then((contact) => {

          // blog list
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
        return res.json({ error: errors.mapped() });
    }
    let ssampleFile;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    ssampleFile = req.files.image;
    let rnd = new Date().valueOf();
    let ffilePath = 'upload/' + rnd + ssampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    ssampleFile.mv('public/' + ffilePath, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded!');
    });


    // return res.json(req.body);

    const contact= new ContactModel({
        title: req.body.title,
       
        details: req.body.details,
        image: filePath
    });

    contact.save((err, newContact) => {
        if (err) {
            return res.json({ error: "Something went wrong!" + err })
        }
        return res.json({ contact: newContact });
    });


},

update: (req, res, next) =>{
res.render('index', { title: 'update', layout: 'backend/layout' })
},


}