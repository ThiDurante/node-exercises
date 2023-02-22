function createCounter() {
  let count = 0; // count is hidden within the closure of createCounter
  
  function increment() {
    count++; // increment has access to count via the closure
    console.log(`Count is now ${count}`);
  }
  
  return increment; // returns a reference to the increment function
}

const counter = createCounter(); // counter now holds a reference to increment
counter(); // logs "Count is now 1"
counter(); // logs "Count is now 2"
