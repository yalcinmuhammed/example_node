var mongoose = require('mongoose');
var logger = require('../helpers/winston');

mongoose.connect(process.env.MONGODB_CONNECTION_URL);

var db = mongoose.connection;
db.on('error', function (err) {
    logger.error("Mongodb connection error", err);
});

db.once('open', function () {
    logger.info('Mongodb connected');
});