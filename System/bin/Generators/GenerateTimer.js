module.exports = (ItemName, days,hrs,mins,secs) =>{

    const fs = require('fs');

    const fileBody =
   `const Timer = require(process.cwd() + "/Timers/Base/Timer");
class ${ItemName}Timer extends Timer{

    constructor(){
        super(${days},${hrs},${mins},${secs}); //days, hrs, mins, seconds


        this.timerFunc = () =>{
            //console.log('Timer Ping');

        }
    }


}

const timer = new ${ItemName}Timer();
module.exports = timer;`;



    fs.writeFile(process.cwd() +'/Timers/' + ItemName + 'Timer.js', fileBody, function (err) {
        if (err)
            return console.log(err);
        console.log('Timer Made For: ' + ItemName);
    });


};