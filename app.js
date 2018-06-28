const express = require('express'),
    http = require('http'), //http for server
    fs = require('fs'), //file system for dynamically reading Controllers
    app = express();
    startup = require('./System/Startup/Startup');
    customStartup = require('./Middleware/System/Startup/CustomStartup');
require('dotenv').config(); // Needed to read env file
const config = require('./Config/config'); //include our Config file as Config


//Run through all the startup functions defined in Startup/System/Startup.js, they can only take in app as a param for this
for (const startupProcess in startup){
    startup[startupProcess](app);
}

config.functions.LogStartup('Checking for custom startup functions');
for (const startupProcess in customStartup){
    config.functions.LogStartup('Running Custom Startup: ' + customStartup[startupProcess].name);
    customStartup[startupProcess](app);
}
config.functions.LogStartup('End Custom Startup');
config.functions.LogStartup("Startup Complete");
