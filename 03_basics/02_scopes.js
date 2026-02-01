let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c)


// ++++++++++++++++++++Scope level and mini hoisting++++++++++++++++++++++

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); // This line will cause an error
  two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log(website); // This line will cause an error
}

// console.log(username); // This line will cause an error

// +++++++++++++++ interesting +++++++++++++++

console.log(addone(5)); // No error here

function addone(num) {
  return num + 1;
}

// addTwo(5) // Error: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};
