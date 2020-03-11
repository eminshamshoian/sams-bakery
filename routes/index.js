const express = require('express');
const router = express.Router();

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
