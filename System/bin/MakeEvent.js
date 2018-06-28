#! /usr/bin/env node
var argv = require('minimist')(process.argv);
const ItemName = argv._[2];


if(ItemName !== undefined){
    require("./Generators/GenerateEvent")(ItemName);
}
else{
    console.error("Error: No Item name given for Make-Event")
}

