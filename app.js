//bring in dependencies
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const moment = require('moment');
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

//Initialize app variable
const app = express();

//View engine setup
app.engine(
    '.hbs',
    exphbs({
        defaultLayout: 'main',
        layoutsDir: 'views/layouts',
        partialsDir: 'views/partials',
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('useNewUrlParser', true);
app.set('useFindAndModify', false);
app.set('useCreateIndex', true);
app.set('useUnifiedTopology', true);
app.set('createIndexes', true);

//Static folder -- for express to know
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routes'));

//set port to environment variable port
const port = process.env.PORT || 3000;

//Listen on a port
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
