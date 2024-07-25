const mongoose = require('mongoose');

require('dotenv').config();

exports.dbConnection =  () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err.message);
        console.log('error connecting to db');
        process.exit(1);
    })
}

