let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app).listen(3000);
let path = require('path');

let index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);

module.exports = app;