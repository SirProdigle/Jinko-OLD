
/*                      SYSTEM CODE: DO NOT TOUCH                                    */
const Event = require("../../Events/Base/Event");
class TestEvent extends Event{
    FireEvent(){
        super.FireEvent(TestEvent.LISTENERS);
    }
    static AddListener(func){
        TestEvent.LISTENERS.push(func);
    }
    /*          END OF SYSTEM CODE                    */
    constructor(){
        super();
        //YOUR ADDITIONAL PROPERTIES FOR YOUR EVENT GO HERE
        this.x = 0;
        this.y =0;
    }

}
TestEvent.LISTENERS = []; // Declare static property for listeners
module.exports = TestEvent;



//How to both add a listener to this event and call it
function SomeCode(){


    const TestEvent = require('./Events/TestEvent.js');
    TestEvent.AddListener((event) => {
        console.log("EVENT: " + event.x + event.y );
    });

    //Some other code
    let y = new TestEvent();
    y.x = 5; //Listeners have access to the event properties so you can fill in data here or in a constructor
    y.y = "ten";
    y.FireEvent();
}