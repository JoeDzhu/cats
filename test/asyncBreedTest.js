const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => {
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
      assert.equal(expectedDesc, bombay);
      done(); 
      
      //current explanations.the breedDetailFromFile part is the same to the one in the asyncBreeds script function.
      //flow is pass the 'Bombay' to the bDFF func,read the file no error return the data to the callback func.so the bombay part
      //in the page, it is value is already data--the details, then process the assert.equal part to return a value- true or false;
      //then have to done() as a callback to pass the returned to it() func.
      //Question? the describe('xxxx', () => {}), the () => {} is not a callback so no need to call to get the value or it is built this way?
    });    
  });

  it('provides, via callback, breed details for the Bombay breed', (done) => {
    breedDetailsFromFile('Balinese', (balinese) => {
      const expectedDesc = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner."
      assert.equal(expectedDesc, balinese);
      done(); 
    });    
  });

  it('provides, via callback, undefined for a breed that does not exist', () => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(undefined, desc);
      undefined;
    });      
  });

});

// function handleTextFileContents(fileContents){
//   const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
//   assert.equal(expectedDesc, fileContents);
//   //done(); 
// };   

// describe('#breedDetailsFromFile', () => {
//   it('provides, via callback, breed details for the Bombay breed', (done) => {
//     breedDetailsFromFile('Bombay', handleTextFileContents)
//   });
// });