const express = require('express');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const passport = require('passport');
const User = require('../models/User');
const WorkOrder = require('../models/WorkOrder');

// Define options
var options = {
    viewEngine: {
        layoutsDir: 'views',
        defaultLayout: 'email',
    },
    viewPath: 'views',
};

//Create routes for pages
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
