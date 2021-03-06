var express=require("express"); 
var bodyParser=require("body-parser"); 
var morgan = require('morgan');
const cors = require('cors');
const db = require('./db');
require("dotenv").config();
const app=express() 

const productRouter = require('./routes/product-router');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.use(express.json());

app.use('/api', productRouter, authRoute, postRoute)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(4242, () => {
    console.log('Serveur on listening on port 4242')
});
    