let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app).listen(3000);
let path = require('path');

let index = require('./routes/index');
let connexion = require('./routes/connexion');
let inscription = require('./routes/inscription');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/connexion', connexion);
app.use('/inscription', inscription);

module.exports = app;