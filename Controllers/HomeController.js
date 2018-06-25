const Controller = require("../Controllers/Base/Controller");


class HomeController extends Controller{

    constructor(){
        super("");

        this.router.get('/', function (req, res) {
            res.send('Index page for /')
        });
    }

}

const Con = new HomeController();
module.exports = Con.router;