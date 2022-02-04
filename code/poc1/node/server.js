global.config = require("./config");
global.board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const common = require("./common");
const arduino = require("./arduino");
const express = require("express");
const router = require("./routes");
const app = express();
const parser = require("body-parser");
const config = require("./config");
const https = require('https');
const fs = require('fs');

arduino.init();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use("/", router);
 

app.listen(4000, function () {
  common.debug("listening on port " + 4001);
}); 


module.exports = app;
