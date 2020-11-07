
// require all the things that are needed
const express = require('express');
const cors = require('cors');
// mongoose helps to connect to MongoDB
const mongoose = require('mongoose');

// configures so environment variables int the dotenv file
require('dotenv').config();

// express server
const app = express();
const port = process.env.Port || 5000;

//middleware allows to parse JSON b/c the server will be sending &  recieving JSON
app.use(cors());
app.use(express.json());

/**database uri from MongoDB and make the connection
ATLAS_uri is the environment variable */
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true}
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//starts the server
app.listen(port, () => {
    console.log(`Server is runnning on port: ${port}`);
});