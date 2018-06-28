module.exports = (itemName) => {


    const fileBody =
        "//Controller specific middleware should always exists within an object formatted as below, they are all added automatically to the controller this is named after\n" +
        "module.exports = {\n" +
        "\n" +
        "     TestMiddleware:  (req, res, next) => {\n" +
        "        console.log('Middleware for " + itemName + " is working');\n" +
        "        next();\n" +
        "    },\n" +
        "};"

    const fs = require('fs');
    fs.writeFile(process.cwd() + '/Middleware/Controller/' + itemName + 'Middleware.js', fileBody, function (err) {
        if (err)
            return console.log(err);
        console.log('Middleware Made For: ' + itemName);
    });


};