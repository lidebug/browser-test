const bodyParser = require('body-parser');
const js = require('libraryjs');
const ajaxmanager = require('ajaxmanager');
const mongoConnect = require('./mongo-connect');
const router = require('./router');

module.exports = (app) => {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.post("/ajax", (req, res, next) => {
    if (!js.check([
      [req, "body", "route"],
      [res]
    ])) {
      next();
      return;
    }
    
    //create ajax manager
    var ajax = ajaxmanager.create();
    ajax.set({
      req: req,
      res: res
    });    

    //Use mongodb?
    if (ajax.import.mongo) {
      mongoConnect((db) => {
        ajax.set({ db: db });
        router(ajax);
      },
      () => {
        ajax.error("mongoDB is offline");
      });
    }
    else router(ajax);
  });

  app.post("*", (req, res, next) => {
    res.send("404");
  });

};