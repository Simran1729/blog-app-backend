const express =  require('express');
const app = express();
const {dbConnection} = require('./config/database')

require('dotenv').config();


// to parse req body
app.use(express.json())

//import routes
const postRoutes = require('./routes/posts');

app.use('/v1', postRoutes);


dbConnection();

app.listen(process.env.PORT, () => {
    console.log("server started");
})

app.get('/', (req, res) => {
    res.send(`<h1>this is home page</h1>`)
})