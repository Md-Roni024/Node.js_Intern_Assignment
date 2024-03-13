const { check } = require('express-validator');

exports.employeeRegisterValidation = [
check('firstname')
    .trim()
    .notEmpty()
    .withMessage('Firstname is missing')
    .isLength({ min: 3, max: 20 })
    .withMessage('Firsname must have length between (3 to 20) characters'),
check('lastname')
    .trim()
    .notEmpty()
    .withMessage('Lastname is missing')
    .isLength({ min: 3, max: 20 })
    .withMessage('Lastname must have length between (3 to 20) characters'),
check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is missing')
    .isEmail()
    .withMessage('Not a valid email'),
check('phonenumber')
    .trim()
    .notEmpty()
    .withMessage('phonenumber is missing')
    .isLength({ min: 11, max:11 })
    .withMessage('phonenumber must have 11 digits'),
];


exports.employeeUpdateValidation = [
check('firstname')
        .trim()
        .notEmpty()
        .withMessage('Firstname is missing')
        .isLength({ min: 3, max: 20 })
        .withMessage('Firsname must have length between (3 to 20) characters'),
check('lastname')
        .trim()
        .notEmpty()
        .withMessage('Lastname is missing')
        .isLength({ min: 3, max: 20 })
        .withMessage('Lastname must have length between (3 to 20) characters'),
check('phonenumber')
        .trim()
        .notEmpty()
        .withMessage('phonenumber is missing')
        .isLength({ min: 11, max:11 })
        .withMessage('phonenumber must have 11 digits'),
];
