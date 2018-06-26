const path = require('path');
const ToBool = require("to-bool");
const config = {};

//accessed via config.web.port etc.
config.web = {
    port: 8080, //Port the server runs on
    publicFolder: path.join(__dirname, 'Public'), //Folder where public assets are
    forceHTTPS: true
};

config.views = {
    directory:process.cwd() +'/Resources/Views', //Base directory for views
    engine: "express-hbs", //View engine
};

config.db = {
    host: "mongodb://localhost/mydb", //Address for MongoDb
};

config.logs = {

    //treat as if private variables
    vars: {
        //Set to false/true on each one to enable logging, these will not log even if true if environment variable does not allow it
        logStartupSequence: true,
        logControllerStartup: false , //Logs info about attaching middleware etc
    },
    //These are your log functions

};


config.functions = {
    LogStartup: (message) => {
        if (config.logs.vars.logStartupSequence) console.log(message);
    },
    LogController: (message) => {
        if (config.logs.vars.logControllerStartup) console.log(message);
    },
};



module.exports = config;