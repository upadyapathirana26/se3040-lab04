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
