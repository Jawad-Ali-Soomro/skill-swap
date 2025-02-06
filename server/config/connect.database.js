const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("connected to the database");
    })
    .catch((err) => {
      console.error("Error connecting to the database", err);
      process.exit(1);
    });
};

module.exports = connectDB;
