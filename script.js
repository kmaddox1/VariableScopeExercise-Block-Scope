// Make a function that takes some count variables that we have and doubles it, then prints that value to the console.
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ......

let count = 1;

function doubleCount() {
  let newCount = count * 2;
   console.log(newCount);
  count = newCount;
}

  function tripleCount() {
    let newCount = count * 3;
    console.log(newCount);
    count = newCount;
  // We have a function that will double the count variable print it to the console, and reassign our count variable to the new doubled count. 
}

//Call the function twice
doubleCount();
doubleCount();
tripleCount();

  // delect it because console.log(newCount); is causing an error 