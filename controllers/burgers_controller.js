var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

// on page load get DATA ARRAY from DATABASE
router.get("/", function(req, res) {
    // send DATABASE DATA ARRAY into HANDLEBAR INDEX
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});

// on user input insert value into DATABASE
router.post("/", function(req, res) {
    burger.insertOne(req.body.burgerInput, function() {
        res.redirect("/");
    });
});

// on user input UPDATE DEVOURED COL in DATABASE for ID
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
