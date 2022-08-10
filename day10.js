//Loops & Iteration
/*
1. for loop
    - for in
    - for of
  for(defination;condition;inc/dec){
    code
  }
2. while loop
    while(condition){
      code
      inc/dec
    }
3. do while loop
    do{
      code
      inc/dec
    }while(condition)

*/

//for loop
// function loop(n){
// for (let i = n; i > 0; i =i-3) {
// if(i>10){
//   break;
// }
//   console.log(i);
// }
// }

//for of loop
// var arr = [100,200,340,580,450,540];
// var obj1 = {name:'kumar', age:32, height:170}

// var objValues = Object.values(obj1) // ['kumar',32,170]

// function loop(params){
// for (var element of params) {
//   console.log(element);
// }
// }

//for in loop
// var arr = [100, 200, 340, 580, 450, 540];
// var obj1 = { name: 'kumar', age: 32, height: 170 }

// function loop(obj) {
//   for (var key in obj) {
//     console.log(obj[key]);
//   }
// }

//while loop
// function loop(n) {
//   var i = 1;
//   while(i<=n){
//       console.log(i);
//       i++;
//   }
// }

//do while loop

// function loop(n) {
//   var i = 1;
//   do {
//     console.log(i);
//     i++;
//   } while (i < 0);
// }

// loop(15);

// boolean conversion of truthy or falsy values
// var name = 'ram';
// console.log(!!name); // true (truthy)


// conditions

/**
 1) if else
  if(condition){
    your code
  }else{
    your code
  }

 2) if else if else
  if(condition){
      your code
    }else if {
      your code
    }else {
      your code
    }
 3) switch
 switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
 4) in line condition
 */

//if else

//  function ifElse(param){
//   if (param<10) {
//     console.log('it is less than 10');
//   } else if (param < 20){
//     console.log('it is less than 20');
//   }else{
//     console.log('it is more than 20');
//   }
//  }

//switch

function switchFunc(param) {
  switch (true) {
    case param < 10: {
      const i = 0;
      i * i;
      break;
    }
    case param < 20: {
      const i = 0
      console.log('it is less than 20');
      break;
    }
    default:
      console.log('it is more than 20');
      break;
  }
}


// switchFunc(21);
