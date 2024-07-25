const express =  require('express');
const app = express();
const {dbConnection} = require('./config/database')

require('dotenv').config();



app.get('/', (req,res) => {
    res.status(200).json(
        {
            message : 'server started'
        }
    )
})


dbConnection();

app.listen(process.env.PORT, () => {
    console.log("server started");
})