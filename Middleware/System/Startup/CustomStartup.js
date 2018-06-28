/*Any custom startup processes you need e.g launch a tcp server, read a bunch of files from io go here
All the functions in module exports are called automatically, check inside System/Startup for reference of how to structure this
All the functions here are called AFTER the required startup processes, if you need them to run during/before then you will need to edit the main system/startup file


 */
module.exports = {

    //Will "HONK" after all necessary package startup functions have been started
    YourCustomMiddlewareFunction: ()=>{
        //console.log("This is a custom startup middleware");
    }



};