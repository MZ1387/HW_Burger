// Import the ORM to create functions that will interact with the database.
// Setup model to interface with the database
var orm = require("../config/orm.js");

var burger = {
    // select all values from mysql database
    selectAll: function(callBack) {
      orm.selectAll("burgers", function(res) {
        callBack(res);
      });
    },
    // insert new value on user input
    insertOne: function(value, callBack) {
      orm.insertOne("burgers", value, function(res) {
        callBack(res);
      });
    },
    // update value on user input
    updateOne: function(column, condition, callBack) {
      orm.updateOne("burgers", column, condition, function(res) {
        callBack(res);
      });
    }
};

// Export the database functions for the controller
module.exports = burger;
