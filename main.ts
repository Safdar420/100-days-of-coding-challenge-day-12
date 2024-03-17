//  Q no 34

let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];
console.log('Pizzas name');

for (let pizza of pizzas){
    console.log(pizza);
}

console.log('Pizzas reference');

for (let pizza of pizzas){
    console.log(`I really like ${pizza} pizza`);
}

console.log('I really love pizza !');

// Q no 35

let animals : string[] = ["Cat","Dog","Rabit"];
console.log("Animals name :");

for (let animal of animals){
    console.log(animal);
}

console.log("\n Animals Statements");

for (let animal of animals){
    console.log(`A ${animal} would make a great pet .`);
}

console.log("\n Any of these animals would make a great pet .")

// Q no 36

function makeShirts (size : string = 'Medium' , message : string = ' I love Programing') : void {
    console.log(`Shirt size is ${size}`);
    console.log(`Message on the shirt : ${message}`);
}
makeShirts('Medium','I love Programing');