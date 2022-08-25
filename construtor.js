// const circle1 = {
//   radius: 1,
//   color:'red'
// }

// const circle2 = {
//   radius: 2,
//   color: 'red'
// }

// const circle3 = {
//   radius: 3,
//   color: 'red'
// }


//factory method
function Circle(radius,color){
  const x = 3;
  const y = 'blue'
  return { radius, color }
}

const circle1 = Circle(1,'red')
const circle2 = Circle(15, 'black')

console.log(circle2);

// function test(){

// }
// function test(param1) {

// }
// const param1 = 200;
// const param2 = 50;
// const param3 = 100;

function test({ param1, param2, param3, param4, param5 }) {
  // const {param1,param2,param3} = params; //destructuring
  console.log(param1, param2, param3);
}

// const ttttt = { param1: 200, param2: 50, param3: 100 };
// const tttttttt = { param1: 200, param2: 50, param3: 100 };
// ttttt.param2 = 700
// test(ttttt);

// console.log({ param1: 200, param2: 50, param3: 100,param4:700,param5:800 });

// const obj = { param1: 200, param2: 50, param3: 100 };
// const testObj = obj;
// testObj.param1 = 600;

//factory function


//construction function


//class 


