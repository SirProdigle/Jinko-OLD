const mongoose = require('mongoose');
const express = require("express");
const config = require(process.cwd() + "/Config/config");

class Controller {

    //Path is e.g blog so the /blog that this controller acts for
    constructor(path = null) {
        if (path == null) {
            throw new Error('No controller path found in super() for something');
        }
        this.router = express.Router([]);
        this.router.path = path;
        let middlewareLogText = "";
        try {
            const middleware = require('../../Startup/Controller/' + this.router.path.charAt(0).toUpperCase() + this.router.path.slice(1) + "Startup");
            for (const middle in middleware) {
                this.router.use(middleware[middle]);
            }
            middlewareLogText +="Startup loaded for Controller: " + this.router.path;
        }
        catch (e) {
            middlewareLogText +="No Startup found for Controller: " + this.router.path;
        }
        config.functions.LogController(middlewareLogText);

    }

}

module.exports = Controller;




