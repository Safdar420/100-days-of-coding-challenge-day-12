//  Q no 34
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
console.log('Pizzas name');
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
console.log('Pizzas reference');
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I really like ".concat(pizza, " pizza"));
}
console.log('I really love pizza !');
// Q no 35
var animals = ["Cat", "Dog", "Rabit"];
console.log("Animals name :");
for (var _b = 0, animals_1 = animals; _b < animals_1.length; _b++) {
    var animal = animals_1[_b];
    console.log(animal);
}
console.log("\n Animals Statements");
for (var _c = 0, animals_2 = animals; _c < animals_2.length; _c++) {
    var animal = animals_2[_c];
    console.log("A ".concat(animal, " would make a great pet ."));
}
console.log("\n Any of these animals would make a great pet .");
// Q no 36
function makeShirts(size, message) {
    if (size === void 0) { size = 'Medium'; }
    if (message === void 0) { message = ' I love Programing'; }
    console.log("Shirt size is ".concat(size));
    console.log("Message on the shirt : ".concat(message));
}
makeShirts('Medium', 'I love Programing');
