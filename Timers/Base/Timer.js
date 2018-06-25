class Timer{

    constructor(days, hrs,mins,secs){
        this.time = 0;
        this.time += 86400000 * days;
        this.time += 3600000 * hrs;
        this.time += 60000 * mins;
        this.time += 1000 * secs;

        this.timerFunc = ()=>{};
    }



}

module.exports = Timer;