module.exports = (ItemName) =>{
    ItemName += "Event";
    const fs = require('fs');
    const fileBody =
        `/*                      SYSTEM CODE: DO NOT TOUCH                                    */
const Event = require("../Events/Base/Event");
class ${ItemName} extends Event{
    FireEvent(){
        super.FireEvent(${ItemName}.LISTENERS);
    }
    static AddListener(func){
        ${ItemName}.LISTENERS.push(func);
    }
    /*          END OF SYSTEM CODE                    */
    //YOUR ADDITIONAL PROPERTIES FOR YOUR EVENT GO HERE
    constructor(param1, param2){
        super(); //Do not remove
        this.x = param1;
        this.y = param2;
    }

}
${ItemName}.LISTENERS = []; // Declare static property for listeners
module.exports = ${ItemName};`;




    fs.writeFile(process.cwd() +'/Events/' + ItemName + '.js', fileBody, function (err) {
        if (err)
            return console.log(err);
        console.log('Event Made For: ' + ItemName);
    });


};



