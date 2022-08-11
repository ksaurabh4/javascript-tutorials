// Arrays
/**
 * push()
 * pop()
 * shift()
 * unshift()
 * length
 * toString()
 * join()
 * forEach()
 * map()
 */

const arr = [1,2,34,5,67,34];

const str = '192.168.1.1';
// const arr2 = str.split('.');
// arr[2] = 100;
// arr.toString();



// for(let index = 0; index < arr.length; index++) {
//   arr[index] = arr[index]+1;
// }

// const arr3 = [];

// arr.forEach((ele, i, array) => {
//   array[i] = ele + 1;
// })

const arr4 = arr.map(ele => ele+1)

function map(arr){
  const arr2=[];
  for(let index = 0; index < arr.length; index++) {
  arr[index] = arr[index]+1;
}

}

console.log(arr, arr4);