#! /usr/bin/env node
var argv = require('minimist')(process.argv);
const ItemName = argv._[2];
const days = argv.days||0;
const hrs = argv.hours||0;
const mins = argv.minutes ||0;
const secs = argv.seconds||0;

if(ItemName !== undefined){

    require('../../System/bin/Generators/GenerateTimer')(ItemName,days,hrs,mins,secs);
}
else{
    console.error("Error: No Item name given for Make-Model")
}