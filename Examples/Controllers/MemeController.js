const Controller = require("../Controllers/Base/Controller");

//For the full controller comments, go to HomeController, this is just a second example

class MemeController extends Controller{

    constructor(){
        super('meme');//Set path to meme so it searches for Startup/Controller/MemeMiddleware - this exists so you can look at the structure

        this.router.get('/', function (req, res) {  //Responds to /meme/
            res.send('/meme home page')
        });
    }

}

const Con = new MemeController();
module.exports = Con.router;