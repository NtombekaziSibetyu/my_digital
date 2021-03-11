// var sha256 = require('js-sha256');

// sha256('Message to hash');
// sha224('Message to hash');
 
// var hash = sha256.create();
// hash.update('Message to hash');
// hash.hex();
 
// var hash2 = sha256.update('Message to hash');
// hash2.update('Message2 to hash');
// hash2.array();
 
// // HMAC
// sha256.hmac('key', 'Message to hash');
// sha224.hmac('key', 'Message to hash');
 
// var hash = sha256.hmac.create('key');
// hash.update('Message to hash');
// hash.hex();
 
// var hash2 = sha256.hmac.update('key', 'Message to hash');
// hash2.update('Message2 to hash');
// hash2.array();

const express = require("express");
const connectDB = require("./config/db")
const app = express();

//connect database
connectDB();

//init middleware
app.use(express.json({ extended : false}));

app.get("/",(req, res) => res.json({msg : "Welcome to contact keeper app"}));

//define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/admin", require("./routes/admin"));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));