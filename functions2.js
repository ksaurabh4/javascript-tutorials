// function sumOfTwoNums(x,y){
//   return x+y;
// }

// const sum = sumOfTwoNums(40000, 345678);

// console.log(sum);

// function isTeaReady(temp){
//   if(temp>90){
//     return 'Your tea is ready!'
//   }else{
//     return 'Wait! Your tea is making!'
//   }
// }

// console.log(isTeaReady(91));

// var isTeaReady = function (temp){
//   if (temp > 90) {
//     return 'Your tea is ready!';
//   }else{
//     return 'Wait! Your tea is making!';
//   }
// }

var isTeaReady = (temp) => temp > 90 ? 'Your tea is ready!' : 'Wait! Your tea is making!';

// var needMoreTime = (isTeaDone) => {
//   if (isTeaDone){
//     console.log('no need');
//   }else{
//     console.log('need more time');
//   }
// }
// const sjds = isTeaReady(91);
// const xxs = needMoreTime(sjds);

// console.log(typeof needMoreTime);

// needMoreTime.type = 'xyz';

// console.log(needMoreTime.type);


// console.log(isTeaReady(90));

function sumOfTwoNums(x,y){
  console.log(x + y);
  return x + y;
}
