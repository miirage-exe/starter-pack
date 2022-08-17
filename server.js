require('dotenv').config();

const express = require('express')
const http = require('http')
const port = process.env.PORT

const app = express()
const server = http.createServer(app)

// Define the public directory
app.use(express.static('public'));
// Define the view engine
app.set('view engine', 'ejs')
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

/* <---- DELETE TO USE SESSION MIDDLEWARE

// Use session middleware
const sessionMiddleware = session({
    secret: randomUUID(),
    saveUninitialized: true,
    resave: true,
    extended: true,
    cookie: { secure: false }})
app.use(sessionMiddleware)

DELETE TO USE SESSION MIDDLEWARE -----> */


app.get('/', (req, res) => {
    res.render('index')
})

// Start the server
server.listen(port, () => {
    console.log('App listening on port ' + port)
})