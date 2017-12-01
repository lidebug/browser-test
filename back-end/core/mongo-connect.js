const mongojs = require('mongojs');
const defaults = require('./defaults')();

module.exports = (success, fail) => {
  //connect to mongodb
  var db = mongojs( defaults.mongoServer );

  db.on("error", (err) => {
    //connection fail
    fail(db);
  });
  db.on("connect", (err) => {
    //connected!
    success(db);
  });
  db.collection("connect").find((err) => {}); //Little trick to make .on("connect") work
};