module.exports = (ItemName) =>{

    const fs = require('fs');

    const fileBody =
        "const Controller = require(\"../Controllers/Base/Controller\");\n" +
        "\n" +
        "\n" +
        "class " + ItemName +"Controller extends Controller{\n" +
        "\n" +
        "    constructor(){\n" +
        "        super('" + ItemName.toLowerCase()+"');" +
        "\n\n" +
        "        this.router.get('/', function (req, res) {  //Responds to /" +ItemName+"\n" +
        "            res.send('/ Index Page for " + ItemName +"')\n" +
        "        });\n" +
        "    }\n" +
        "\n" +
        "}\n" +
        "\n" +
        "const Con = new " + ItemName+"Controller();\n" +
        "module.exports = Con.router;";



    fs.writeFile(process.cwd() +'/Controllers/' + ItemName + 'Controller.js', fileBody, function (err) {
        if (err)
            return console.log(err);
        console.log('Controller Made For: ' + ItemName);
    });


};