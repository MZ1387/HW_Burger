// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

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
  },

  insertOne: function(tableInput, value, callBack) {

    var queryString = "INSERT INTO " + tableInput;

    queryString += ' (burger_name, devoured) VALUES ("';
    queryString += value;
    queryString += '", false); ';

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },

  updateOne: function(tableInput, column, condition, callBack) {

    var queryString = "UPDATE " + tableInput;

      queryString += " SET ";
      queryString += objToSql(column);
      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callBack(result);
      });

  }
}

// Export the orm object for the model (cat.js).
module.exports = orm;
