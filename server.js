const express    = require ('express');
const path       = require ('path');
const bodyParser = require ('body-parser');
const cors       = require('cors');
const trainerController = require('./trainerB/trainerController');
const app        = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/trainerB',trainerController);



//start server
const port = 4200;

app.listen(port, () => 
{  console.log('Listening on ' + port);
});

module.exports = app;