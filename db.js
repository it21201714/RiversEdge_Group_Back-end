const mongoose = require("mongoose")

var mongoURT = 'enter db string'

mongoose.connect(mongoURT , {useUnifiedTopology : true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', () => {
    console.log("MOngoDB Connection Failed...");
})

connection.on('connected', () => {
    console.log('MongoDB connection Successful...');
})

module.exports = mongoose
