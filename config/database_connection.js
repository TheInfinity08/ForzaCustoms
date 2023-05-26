const mongoose = require("mongoose");

const database_connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.URI);
    console.log("database connected", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = database_connection;
