module.exports = (app) => {

  app.get("*", (req, res) => {
    //var page = req.url;
    res.sendFile( process.cwd() + "/front-end/app/bootstrap/index.html" );
  });

};