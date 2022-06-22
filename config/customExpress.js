const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = ()=>{

    const app = express();

    app.use(bodyParser.jsong());
    app.use(bodyParser.urlencoded({extended: true}));

    consign()
        .include(app)
        .into('controllers');

    return app;
}