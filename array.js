// Arrays
/**
 * push()
 * pop()
 * shift()
 * unshift()
 * length
 * toString()
 * join()     // string
 * forEach()
 * map()  //return new array
 * find() //return element which matching conditioin or undefined
 * findIndex()   //return first occured index of which matching conditioin OR -1
 * filter()    //return new arr of element which matching conditioin
 * lastIndexOf()
 * slice()
 * splice()
 */

// const arr = [1,2,34,5,67,34];

// const str = '192.168.1.1';
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

// const arr4 = arr.map(ele => ele+1);

// function map(arr){
//   const arr2=[];
//   for(let index = 0; index < arr.length; index++) {
//   arr2[index] = arr[index]+1;
// }
// return arr2;
// }

// const dataArr = map(arr);
// console.log(dataArr, arr4);

// const found = arr.find(ele => ele===34);

// const found = arr.findIndex(ele => ele>4);

// const arr5 = arr.filter(el=>el>20)

// console.log(arr5);
// const data = [
//   {
//     "empId": 7,
//     "empEmail": "punit@test.com",
//     "empName": "Punit",
//     "empAddress": "delhi",
//     "empCity": "Delhi",
//     "empState": "Delhi",
//     "empCountry": "India",
//     "empZip": "11",
//     "empDept": "Marketing",
//     "empSubDept": "",
//     "empDesignation": "Secertary",
//     "isManager": 1,
//     "empManagerId": 6,
//     "companyId": 3,
//     "empPhone": "",
//     "empCode": "106",
//     "empManagerName": "Niteesh"
//   },
//   {
//     "empId": 8,
//     "empEmail": "test@test.org",
//     "empName": "test",
//     "empAddress": "delhi",
//     "empCity": "Delhi",
//     "empState": "Delhi",
//     "empCountry": "India",
//     "empZip": "11",
//     "empDept": "Finance",
//     "empSubDept": "",
//     "empDesignation": "Finance manager",
//     "isManager": 0,
//     "empManagerId": 7,
//     "companyId": 3,
//     "empPhone": "",
//     "empCode": "107",
//     "empManagerName": "Punit"
//   }
// ]

// const result = data.filter(el => el.empName === 'test' && el.empManagerId===7)
// console.log(result);

const arr = [1, 2, 34, 5, 67, 34];

// console.log(arr.lastIndexOf(34));

// const arr2 = arr.slice(1,4);

const arr2 = arr.splice(1,3,80,49,51)
console.log(arr2, arr);


