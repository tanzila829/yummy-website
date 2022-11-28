const { check } = require('express-validator');

exports.store=[
    check('facebook', "Invalid facebook").not().isEmpty().trim(),
    check('twiter', "Invalid twiter").not().isEmpty().trim(),
    check('instragram', "Invalid instragram").not().isEmpty().trim(),
    check('linkedin', "Invalid linkedin").not().isEmpty().trim(),
]

exports.update=[
    check('facebook', "Invalid facebook").not().isEmpty().trim(),
    check('twiter', "Invalid twiter").not().isEmpty().trim(),
    check('instragram', "Invalid instragram").not().isEmpty().trim(),
    check('linkedin', "Invalid linkedin").not().isEmpty().trim(),

    
];