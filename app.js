const myPromise = new Promise((resolve, reject) => {
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
