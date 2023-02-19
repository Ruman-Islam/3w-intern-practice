// Traverse an array
const arr = [4, 5, 1, 6, 8, 9, 48];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  //   sum = sum + arr[i];
  sum += arr[i];
}
console.log(sum);

// So array traverse is touching every single element in an array. It is mostly done with loops.