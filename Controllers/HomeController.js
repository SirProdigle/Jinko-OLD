const Controller = require("../Controllers/Base/Controller");


class HomeController extends Controller{

    constructor(){
        super("");

        this.router.get('/', function (req, res) {
            res.render('index', { title: 'Hey', message: 'Hello there!' })
        });
    }

}

const Con = new HomeController();
module.exports = Con.router;