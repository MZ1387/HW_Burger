// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function() {
    console.log("selectAll");
  },

  insertOne: function() {
    console.log("insertOne");
  },

  updateOne: function() {
    console.log("updateOne");
  }
}

// Export the orm object for the model (cat.js).
module.exports = orm;
