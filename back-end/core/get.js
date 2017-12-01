const path = require('path');
const fs = require('fs');

module.exports = (app) => {

  app.get("*", (req, res) => {
    
    const indexPath = path.join( process.cwd() + "/front-end/app/index.html" );
    fs.exists(indexPath, (exists) => {
      if (exists) {
        res.sendFile( indexPath );
      }
      else {
        res.send("404");
      }
    });

  });

};