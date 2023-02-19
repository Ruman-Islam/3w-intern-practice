const person = {
  name: "Ruman",
};

person.age = 10; // Here person object has been muted

// Strings are immutable
const person2 = "jawad";
// person2.replace("w", "f"); Here it cannot modify the person2

const newValue = person2.replace("w", "f"); // Here it returns a new value
