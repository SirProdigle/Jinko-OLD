#! /usr/bin/env node
var argv = require('minimist')(process.argv);
const ItemName = argv._[2];


if(ItemName !== undefined){

    require('../../System/bin/Generators/GenerateMiddleware')(ItemName);
    //Model
    if(argv.mo){
        require('../../System/bin/Generators/GenerateModel')(ItemName);
    }

//Startup
    if(argv.co){
        require('../../System/bin/Generators/GenerateController')(ItemName);
    }

}
else{
    console.error("Error: No Item name given for Make-Startup")
}