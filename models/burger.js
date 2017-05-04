// Import the ORM to create functions that will interact with the database.
// Setup model to interface with the database
var orm = require("../config/orm.js");

var burger = {
    // call mySQL SELECTS ALL FROM BURGERS and returns array of objects in callback
    selectAll: function(callBack) {
      orm.selectAll("burgers", function(res) {
        callBack(res);
      });
    },

    insertOne: function(value, callBack) {
      orm.insertOne("burgers", value, function(res) {
        callBack(res);
      });
    },

    updateOne: function(column, condition, callBack) {
      orm.updateOne("burgers", column, condition, function(res) {
        callBack(res);
      });
    }

//     update: function(devoured, condition, cb) {
//   orm.update("cats", objColVals, condition, function(res) {
//     cb(res);
//   });
// },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
