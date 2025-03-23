let numberOfGuest = 4;
let pizzaSize;
//small <= 2
//medium <= 5
//large

if (numberOfGuest <= 2) {
  pizzaSize = "small";
} else if (numberOfGuest <= 5) {
  pizzaSize = "medium";
} else {
  pizzaSize = "large";
}
console.log(pizzaSize);
