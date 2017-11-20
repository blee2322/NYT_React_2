const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose =  require('mongoose');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/build'));
app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactnyt',
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`==> API Server now listening on PORT ${PORT}!`);
});