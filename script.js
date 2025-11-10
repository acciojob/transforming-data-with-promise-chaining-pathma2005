document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");
  output.innerText = ""; // clear previous result

  const num = Number(input);

  if (isNaN(num)) {
    output.innerText = "Please enter a valid number!";
    return;
  }

  // Step 1: initial promise (after 2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    // Step 2: multiply by 2 (after 2 seconds)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value * 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    // Step 3: subtract 3 (after 1 second)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value - 3;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Step 4: divide by 2 (after 1 second)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value / 2;
          output.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Step 5: add 10 (after 1 second)
    .then((value) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = value + 10;
          output.innerText = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((err) => {
      output.innerText = "Error: " + err;
    });
});

