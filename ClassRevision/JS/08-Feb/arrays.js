const teas = [
  "Green tea",
  "Black tea",
  "oolong tea",
  "White tea",
  "Herbal Tea",
];
console.log(teas);

//Add 'Chamomile Tea' to the existing list of teas
teas.push("Chamomile Tea");

// Remove 'Oolong Tea' from the list of teas
const index = teas.indexOf("oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}

// Filter the list to only include teas that are caffeinated.
const caffeinatdTeas = teas.filter((tea) => tea !== "Herbal Tea");

// Sort the list of teas in alphabetical order.
const sortedTeas = teas.sort();

//Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// Use a for loop to count how many teas are caffeinatd(excluding Herbal tea)
let caffeinatdMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatdMyTeas++;
  }
}

// Use a for loop to create a new array with all tea names in uppercase
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}

//Use a for loop to find the tea name with the most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}

// Use a for loop to reverse the order of teas in the array
const reversedArray = [];
for (let i = teas.length; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
