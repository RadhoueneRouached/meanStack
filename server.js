// server.js

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
	app.use(bodyParser.json());
    //enables cors
	app.use(cors({
	  'allowedHeaders': ['sessionId', 'Content-Type'],
	  'exposedHeaders': ['sessionId'],
	  'origin': '*',
	  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	  'preflightContinue': false
	}));

	
    const port = process.env.PORT || 4000;

	const adUnitRoutes = require('./routes/adunit.route');

	app.use('/adunits', adUnitRoutes)
	
    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });