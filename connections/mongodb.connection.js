const mongoose = require('mongoose');
const logger = require('../helpers/winston');

mongoose.connect(process.env.MONGODB_CONNECTION_URL);

const db = mongoose.connection;
db.on('error', function (err) {
    logger.error("Mongodb connection error", err);
});

db.once('open', function () {
    logger.info('Mongodb connected');
});