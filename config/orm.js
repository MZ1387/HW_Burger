// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {

  // function SELECTS ALL FROM TABLE and returns result as a callback
  selectAll: function(tableInput, callBack) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  }
  // ,
  //
  // insertOne: function() {
  // }
  // ,
  //
  // updateOne: function() {
  // }
}

// Export the orm object for the model (cat.js).
module.exports = orm;
