// Import the ORM to create functions that will interact with the database.
// Setup model to interface with the database
var orm = require("../config/orm.js");

var burger = {
    // call mySQL SELECTS ALL FROM BURGERS and returns array of objects in callback
    selectAll: function(callBack) {
      orm.selectAll("burgers", function(res) {
        callBack(res);
      });
    }
    ,

    insertOne: function(value, callBack) {
      orm.insertOne("burgers", value, function(res) {
        callBack(res);
      });
    }

//     create: function(cols, vals, cb) {
//   orm.create("cats", cols, vals, function(res) {
//     cb(res);
//   });
// },
    // ,
    //
    // updateOne: function() {
    //   orm.updateOne();
    // }
};

// var burger = {
//   selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   }
// };

// Export the database functions for the controller (catsController.js).
module.exports = burger;
