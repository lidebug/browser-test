const fs = require('fs');
const path = require('path');

module.exports = (ajax) => {
  var routePath = path.join( process.cwd(), "/back-end/core/routes", ajax.import.route + ".js" );

  fs.exists(routePath, (exists) => {
    if (exists) {
      require( routePath )(ajax);
    }
    else {
      ajax.error("wrong route");
    }
  });
};