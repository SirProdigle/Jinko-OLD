#! /usr/bin/env node
var argv = require('minimist')(process.argv);
const ItemName = argv._[2];


if(ItemName !== undefined){

    require('../../System/bin/Generators/GenerateModel')(ItemName);
    //Model
    if(argv.co){
        require('../../System/bin/Generators/GenerateController')(ItemName);
    }

//Startup
    if(argv.mi){
        require('../../System/bin/Generators/GenerateMiddleware')(ItemName);
    }

}
else{
    console.error("Error: No Item name given for Make-Model")
}