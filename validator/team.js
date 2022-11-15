const { check } = require('express-validator');

exports.store=[
    check('name', "Invalid name").not().isEmpty().trim(),
    check('designation', "Invalid designation").not().isEmpty().trim(),
    check('image', "Invalid Image").not().isEmpty().trim(),
    check('facebook', "Invalid facebook").not().isEmpty().trim(),
    check('twiter', "Invalid twiter").not().isEmpty().trim(),
    check('instragram', "Invalid instragram").not().isEmpty().trim(),
    check('linkedin', "Invalid linkedin").not().isEmpty().trim()
];

exports.update=[
    check('name', "Invalid name").not().isEmpty().trim(),
    check('designation', "Invalid designation").not().isEmpty().trim(),
    check('image', "Invalid Image").not().isEmpty().trim(),
    check('facebook', "Invalid facebook").not().isEmpty().trim(),
    check('twiter', "Invalid twiter").not().isEmpty().trim(),
    check('instragram', "Invalid instragram").not().isEmpty().trim(),
    check('linkedin', "Invalid linkedin").not().isEmpty().trim()


 
];
