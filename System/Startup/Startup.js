const fs = require("fs");
const config = require("../../Config/config");
const express = require("express");
const http = require("http");
const helmet = require("helmet");
module.exports = {

    DatabaseStartup: (app) => {
        config.functions.LogStartup("Database Startup Begin");
        const mongoose = require('mongoose');
        mongoose.connect(config.db.host).catch(function () {
            if (process.env.NODE_ENV === "production") {
                console.error("ERROR: Failed to connect to mongoDB host: " + config.db.host + "\nClosing Down Node Server");
                process.exit();
            }
            else {
                console.error("ERROR: Failed to connect to mongoDB host: " + config.db.host + "\nContinuing due to development environment");
            }
            config.functions.LogStartup("Database Startup End");
        });
    },

    SetExpressVariables: (app) => {
        config.functions.LogStartup("Express Variable Setup Begin");
        app.set('views', config.views.directory); //Set view path, eg rendering users/index renders path/users/index
        app.set('view engine', config.views.engine); //Set view engine to create dynamic html
        app.use(express.static(config.web.publicFolder)); //Set our Public folder for images/js/css
        app.use(helmet()); //Helmet sets up a lot of security variables
        config.functions.LogStartup("Express Variable Setup End");
    },

    //NOTE: because of the use of process.cwd, the app.js must be called from inside the base folder when using the node or npm start command
    LinkControllers: (app) => {
        config.functions.LogStartup("Controller Linking Begin");
        fs.readdirSync(process.cwd() + "/Controllers").forEach(function (file) {
            if (file.substr(-3) === '.js') {
                let router = require(process.cwd() + '/Controllers/' + file);
                app.use("/" + router.path, router);
            }
        });
        config.functions.LogStartup("Controller Linking End");
    },

    SetupTimers: (app) => {
        config.functions.LogStartup("Timer Linking Begin");
        fs.readdirSync(process.cwd() + "/Timers").forEach(function (file) {
            if (file.substr(-3) === '.js') {
                let timer = require(process.cwd() + '/Timers/' + file);
                setInterval(timer.timerFunc, timer.time);
            }
        });
        config.functions.LogStartup("Timer Linking End");
    },

    ForceHTTPS: (app) => {
        const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
        app.use(redirectToHTTPS(app.use(redirectToHTTPS([/localhost:(\d{4})/]))));
    },

    StartWebServer: (app) =>{
        config.functions.LogStartup("Starting Web Server");
        http.createServer(app).listen(config.web.port, function(){
            config.functions.LogStartup('Web Server launched on port ' + config.web.port);
        });

    }


};