let fname = "Amresh";
let fname2 = fname;

fname2 = "Rahul";

console.log(fname);
console.log(fname2);
// this copy data from fname to fname2
// because it store in stack memory
// stack memory data can't grow

let p1 = {
  fname: "Amresh",
};

let p2 = p1;

p2.fname = "Amresh";

console.log(p2);
console.log(p1);

// this give refrence of data not copy data
// it store in heap memory and their reference store in stack memory
// heap memory data can grow

let p3 = { ...p1 };

// copy all data from p1 to p3 with new reference point.
// but only level 1 not work in inner objects, make shallow copy
// ... spread operator

const p1KaString = JSON.stringify(p1);

let p4 = JSON.parse(p1KaString);

// this make deep copy
