
// &&, ||, ??
var val;
var val2 = null;
var val3 = 0;

console.log(val ?? val2 ?? val3 ?? 'test' ?? 1 === true);

// AND (&&)
// 1. falsy - no go foreward return there
//2. truthy - pass to next expression

// OR (||) null/undefined/0/false (falsy)
// 1. truthy - no go foreward return there
//2. falsy - pass to next expression

// OR(??)  null/undefined (falsy)

// ?

// console.log(person?.kumar);

// person = { name:'kumar', age: '32' };

// console.log(person?.name);

// if(truthy){

// }else if(truthy){

// } else{

// }

// console.log(`Hello, ${person.name ? person.name:'User'}`);


//de-structuring
function printPrice({price}) {
  console.log(price);
}

function changeColor(obj) {
  obj.color = 'pink';
}

// var arr = [100, 99, 98, 97, 96];



// console.log(vehicle.color);

// console.log(tv === { color: 'black', size: 43, display: 'led' });

// { color: 'black', size: 43, display: 'led' }

// tv.price=50000;
// tv['withStand'] = true;
// console.log(tv);
// printPrice(tv);
// printPrice(vehicle);
//object destructuring
// var vehicle = { company: 'tata', model: 'nano', mileage: '17l', color: 'red' };
// var tv = { size: 43, display: 'led' };
// var color= 'purple';
// var { color:akki, price, motherBoard = false } = vehicle;
// // printColor(vehicle); // red
// printColor(tv); //black
// console.log(color, price, motherBoard);
// console.log(color, akki);
// function printColor({ color: akki = 'no color' }) {
//   console.log(akki);
// }

//Array destructuring