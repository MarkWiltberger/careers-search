async function passTwoSeconds() {
  try {
    response = await setTimeout(() => {
      console.log("2 seconds have passed");
    }, 2000);

    console.log("after setTimeout function");
  } catch (error) {
    // Do something smarter with `error` here
    throw new Error(`Error - setTimeout rejected`);
  }
}

passTwoSeconds();
console.log("after async/await");
