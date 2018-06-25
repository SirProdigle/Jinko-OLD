class Event{

    constructor(){}

    FireEvent(listenerArray){
        for (let i = 0; i <  listenerArray.length; i++) {
            if(!typeof listenerArray[i] === "function" ){
                console.error(listenerArray[i].name + " is not a function and is in the LISTENERS for " + this.constructor.name);
            }
            else {
                listenerArray[i](this);
            }
        }
    }



}

module.exports = Event;