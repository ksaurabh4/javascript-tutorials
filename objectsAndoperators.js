var person = { name: 'Kumar', age: 32, run: akki, family: [1, 2] };
var arr = ['ad', 32, Symbol('hello'), akki, [1, 2]];
var arr2 = { 0: 'ad', 1: 'ab', 2: 'ca' };

function akki() {
  console.log('test');
  return 'test2';
}

var values = Object.values(person);
console.log(values);

//2 ways to access any property in object
//first dot notation
// var str = obj.run(); // Kumar
//square bracket
// var key = 'run';
// console.log(obj[key]()); // Kumar
// var str = arr[3]();
// console.log(str);

// console.log(typeof obj.family);
//+, -, *, /,%,++,--,**  (Arithmetic operators)
// var fName = "Kumar";
// var lName = "Saurabh";
// var xyz = 8 - null;
// console.log(typeof xyz, xyz);

// snake_case
// camelCase
// NaN
// type Coersion
// Comparing operation
// == OR ===
//  != OR !==
// >,<,>=,<=
// console.log(9%17);

// var num = 8;
// num++;
// console.log(num++);
// console.log(num);
// ++num;
// num--;
// --num;
function printNum(num) {
  var sum = 1;
  while (num > 0) {
    sum *= num % 10; //3 // sum = sum + num%10
    num = Math.floor(num/10); //394723
    //floor down //ceil up
  }
  console.log(sum);
}

// var num = 3947235; //394723 * 10 + 5  //115  11 * 10 + 5 //55 = 5*10 +5 //117 = 11*10+7

// printNum(num);

//974125
//9*100000 + 7*10000 + 4*1000 + 1*100 + 2*10 + 5

// console.log(3947235/10);

// var name = 'kumar ';
// name += 'saurabh '; //name = name + 'saurabh '
// name +="hello "
// console.log(name);

// var num = 3;

// num -= 2;
// console.log(num);

