const { check } = require('express-validator');

exports.store=[
    check('name', "Invalid name").not().isEmpty().trim(),
    check('image', "Invalid image"),
    check('details', "Invalid details").not().isEmpty().trim(),
    check('designation', "Invalid designation").not().isEmpty().trim()
]

exports.update=[
    check('name', "Invalid name").not().isEmpty().trim(),
    check('image', "Invalid image"),
    check('details', "Invalid details").not().isEmpty().trim(),
    check('designation', "Invalid designation").not().isEmpty().trim()
    
];