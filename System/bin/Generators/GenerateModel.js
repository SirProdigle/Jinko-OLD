module.exports = (itemName) => {


    const fileBody =
        "const mongoose = require('mongoose')\n" +
        "    ,Schema = mongoose.Schema;\n" +
        "\n" +
        "//Schema for the model\n" +
        itemName +"Schema = new Schema( {\n" +
        "    name: String,\n" +
        "    description: String\n" +
        "//The properties above are just examples, not needed\n"+
        "});\n\n\n\n\n"+
        itemName+" = mongoose.model('"+itemName+"', " +itemName + "Schema);\n" +
        "module.exports = "+itemName+";"


    fs = require('fs');
    fs.writeFile(process.cwd() +'/Models/' + itemName + '.js', fileBody, function (err) {
        if (err)
            return console.log(err);
        console.log('Model Made For: ' + itemName);
    });

};