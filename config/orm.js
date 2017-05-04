// Import MySQL connection to be used in the orm methods
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// cycle through an object's key/value pairs and print them as a string
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
    // function SELECTS ALL FROM TABLE and returns result
    selectAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },

    // function INSERT INTO TABLE and returns result
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

    // function UPDATE TABLE, SET VALUE and returns result
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

// Export the orm object for the model
module.exports = orm;
