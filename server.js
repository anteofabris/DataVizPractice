const express = require('express');
const app = express();
const csv = require('csv-parser')
const fs = require('fs')

app.use(express.static(__dirname + '/public'));


app.get('/data', (req, res) => {
  var dataArray = []
  // read file, convert
  fs.createReadStream('./data/GameStop_Stock_History.csv')
  .pipe(csv())
  .on('data', (data) => {
    console.log('this is the data: ', data)
    // store data in an array
    dataArray.push(data);

  })
  .on('end', () => {
    console.log('done')
    // send the data back, res.send
    res.send(dataArray)
  })
})

let port = 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})