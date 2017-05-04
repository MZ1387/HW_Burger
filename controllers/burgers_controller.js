var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  // when the callback from the MODEL comes back (DATA) put that array of objects from mySQL into and object
  // send that object into HANDLEBAR INDEX
  burger.selectAll(function(data) {
    var handlebarsObject = {
      burgers: data
    };
    // after DATA is returned render index handlebars
    res.render("index", handlebarsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(req.body.burgerInput, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
