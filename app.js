var express = require('express'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// routes
var routes = require('./routes/index'),
    register = require('./routes/register'),
    users = require('./routes/users'),
    login = require('./routes/login');

// models
var NavItem = require('./models/navitem');

var app = express();

mongoose.connect('mongodb://localhost/baseapp');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res, next) {
    var navitems = NavItem.find(function(err, navitems) {
        for (var item in navitems) {
            if (navitems[item].url === req.url) {
                navitems[item].active = true;
            }
        }
        app.locals.navitems = navitems;
        app.locals.title = app.get('title');
        next();
    });
});

app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            title: app.get('title'),
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
