const interval = setInterval(() => {
  console.log("I will print every 2 seconds");
}, 2000);

const theTimeout = setTimeout(() => {
  clearInterval(interval);
}, 11000);
