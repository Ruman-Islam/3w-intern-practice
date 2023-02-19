const arr = [1, 3, 5, 10, 11, 34, 56, 76];

// Imperative code
const lessThan10Array = (arr) => {
  const lessThan10Array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      lessThan10Array.push(arr[i]);
    }
  }
  return lessThan10Array;
};
const result = lessThan10Array(arr);
console.log(result);
// So imperative code is tell the computer how to do a task

// Declarative code
const lessThan10Array2 = (arr) => arr.filter((item) => item < 10);
const result2 = lessThan10Array(arr);
console.log(result2);
// And declarative code is tell the computer what to do
