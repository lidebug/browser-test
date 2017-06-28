var express = require("express");

var app = express();

// —————————————————————— Default Values ——————————————————————
var defaults = require( "./back-end/core/defaults" )();

// —————————————————————— Static Files ——————————————————————
require( "./back-end/core/static-files" )(express, app);

// —————————————————————— POST ——————————————————————
require( "./back-end/core/post" )(app);

// —————————————————————— GET ——————————————————————
require( "./back-end/core/get" )(app);

// —————————————————————— Lauch Server ——————————————————————
var server = app.listen( defaults.expressPort, () => {
  console.log("Express is started: " + defaults.expressPort);
});