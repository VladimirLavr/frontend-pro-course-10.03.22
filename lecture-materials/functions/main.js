const movies = [
  { id: 1, name: "Fast and Furious", cost: 5.99 },
  { id: 2, name: "Fast and Furious 2", cost: 3.99 },
  { id: 3, name: "Fast and Furious 4", cost: 4.99 },
  { id: 4, name: "Shrek", cost: 12.99 },
];

const cart = [];


function addToCart(id) {
  const selectedMovie = movies.find((movie) => movie.id === id);
  selectedMovie && cart.push(selectedMovie);
}

function printCheck() {
  cart && cart.length ? cart.forEach((movie, i) => {
    console.log(`${i + 1} - ${movie.name} - $${movie.cost}`);
  }) : console.log("Cart is empty");
}

function resetCart() {
  cart.length = 0;
}

// --------- Execution area --------- //
console.clear();

addToCart(2);
addToCart(4);

printCheck();
resetCart();
console.log("--------------------");
printCheck();
