const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2 seconds have passed");
    // there is no resolve() or reject() call.
  }, 2000);
});

myPromise
  .then((response) => {
    console.log("response log:");
    console.log(response);
  })
  .catch((error) => {
    console.log("error log:");
    console.log(error);
  });

console.log("after Promise");
