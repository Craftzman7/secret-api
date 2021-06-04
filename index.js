const express = require(`express`)
var app = new express()
var fs = require("fs");
var routePath="./routes/"; 
app.use(express.static, "images")
fs.readdirSync(routePath).forEach(function(file) {
    var route = routePath+file;
    require(route)(app);
});
app.listen(80)