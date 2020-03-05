const express = require('express')
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();

// Create express instance
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname+'/public'));

app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:true,
  store: new MySQLStore({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    expiration: 86400000 * 7,
  }),
}));

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use('/users', users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}