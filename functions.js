function printNum() {
  const fabNumArr = [0, 1]; //[0,1,1,2,3]
  const print = (num) => { console.log(num) };
  fabNumArr.forEach(print);

  for (let i = 1; i < 10; i++) {
    const newNum = fabNumArr[i] + fabNumArr[i - 1]; //3+2 =5
    console.log(newNum);
    fabNumArr.push(newNum);
  }
}

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// function printX(func){
//   func();
// }

function run() {
  console.log(100);
}

// printX(run);
// (num => { console.log(num) })();


function runThePersonIfNotHandicap(visibilityPercent, callback) {
  if (visibilityPercent > 40) {
    callback();
  }
  else {
    console.log('Cant walk');
  }
}
var isHandi = false;

// runThePersonIfNotHandicap(isHandi, run);



// In JavaScript, functions are known as first class functions

// function name(params) {}

// var name = function(params){}

// var name = (param) => {}

runThePersonIfNotHandicap(50, (param) => {console.log(30) });

