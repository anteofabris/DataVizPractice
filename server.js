const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');
let $ = require('jquery');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));




let port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})