const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log('Callback: I have the data!')
    if (!error) callback(data);

  });
}


// breedDetailsFromFile('Bombay', (bombay) => {
//   console.log('Return Value: ', bombay) 
// });

module.exports = breedDetailsFromFile