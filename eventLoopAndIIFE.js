var a = 5;
document.querySelector('.btn').addEventListener('click', printGreeting);
console.log(a);
setTimeout(printGreeting1, 1000); //async
setTimeout(printGreeting2, 5000); //async
setTimeout(printGreeting3, 0); 
a = 20;
var b= 40;

console.log((a+b));

function printGreeting() {
  console.log('hello - 0');
}
function printGreeting1() {
  console.log('hello - 1');
}
function printGreeting2() {
  console.log('Hello - 2');
}
function printGreeting3() {
  console.log('hello -3');
}

console.log('kumar');


function b(){
  var any = 100;
}

function ab(){
  // var any = 50;
  function c() {
    // var any = 25;
    function d(){
      // var any = 10;
      console.log(any);
    }
    d();
  }
  c();
}


var any = 75;

// c(); //any = 75;
ab();

(function travel() {
  console.log('travelling');
})();
// Immediately Invoked Function Expression (not have access outside)

travel();
// var travel = 'travelling';


