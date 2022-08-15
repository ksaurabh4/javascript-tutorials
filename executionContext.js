// const x = require("./day2");
// // var name1 = "Kumar Saurabh"; // global

// // function greet(text){ //global
// //   var newName = "Akhilesh Rana";
// //   console.log(text);
// //   console.log(this);
// // }

// // greet('my name is kumar');

// // // console.log('hello World');

// // console.log(this);
// // alert(name1);
// // console.log(a); //undefined
// // var a = 25

function number(name) {
  var a = 50;
  console.log(window);
  isEven(a);
}

function isEven(num) {
  console.log(num % 2 === 0);
}

number();
console.log(window);

var me = { name: "kumar", age: 32 };
// console.log(me);
// number(`${me.name} - ${me.age}`);
localStorage.setItem('user',JSON.stringify(me));
// localStorage.removeItem('user');
var html = document.querySelector('#name');
// console.log(html.innerText);

// var url = location.host;
var myLocation = navigator.geolocation.getCurrentPosition((value)=>{console.log(value)});

console.log(`my location is ${myLocation}`);

// // console.log(a);

// // var b= 40;

// 1. Global object (window/this) document/location/localStorage/navigator
// 2. Define variable and functions
// 3. line by line code - syncronous

//Global environment
//lexical environment
//global execution context


//7. Define variable and functions in isEven functional context
//6. isEvevn function Execution context    ---------- remove 1
//5. Define variable and functions in number functional context
//4. number function Execution context  -------------- remove 2
// 3. line by line code - syncronous
//2. Define variable and functions in Global context
//1. Global Execution Context ( Global object (window/this) document/location/localStorage/navigator) 