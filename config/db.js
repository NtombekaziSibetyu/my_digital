// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
const mongoose = require("mongoose");

const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
    try { 
        await mongoose.connect(db, {
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify : false
        })
        console.log("MongoDB connected.... ")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    
};
module.exports = connectDB;