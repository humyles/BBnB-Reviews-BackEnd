const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database/index.js').db;
const reviewsRoutes = require('./router.js');
const path = require('path');
var compression = require('compression');

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(compression());

app.use("/:id", express.static(path.join(__dirname, "../client/dist")));

app.use('/', reviewsRoutes);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})