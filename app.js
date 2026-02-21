const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});
const myPromise = new Promise((resolve, reject) => {
  const condition = true; // change to false to test reject
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
  resolve('Success!');
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
const myModule = require('./my-module.js');
console.log(myModule.myFunction());
