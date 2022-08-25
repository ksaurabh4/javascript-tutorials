// object destructuring & spread oprator

const obj1 = {name:'kumar', age:32, height:173, add:'matiyala', pin:'110059', hobbie:'reading',favColor:'blue'};
const obj2 = {profession:'software engineer', eyeColor:'black'}
// const {name, height} = obj;
// const newObj = obj;
const newObj = { ...obj1, ...obj2, testProp: 'testing', testProp2:'testing2', pin:'110058' };

// newObj.name='akki';
// console.log(newObj);

//destructuring
// const { name, add, ...params } = { ...obj1, ...obj2};
const {add } = newObj;
// console.log(xyz);
// obj1.name = 'akki'
// console.log(obj1.name);
newObj.add = add.toUpperCase();
// console.log(newObj);



const obj3 = {name:'kumar',age:32,height:173};

const func1 = ()=>{
  console.log('test')
}

function test1({ name, age, height }){
  console.log(name,age,height);
}

function test2(params) {
  // const { name, age, height } = params;
params.name = 'kumar1';
  // console.log(name, age, height);
}

function test3({...params}) {
  // const {name,age,height} = params;
  params.name = 'kumar2';
  // console.log(name, age, height);
}

// test2(obj3);
test3(func1);

// console.log(obj3.name);



let x = 50;
let y = x;
// console.log(x,y,'first');
x= 56;
// console.log(x, y, 'second');

const z = {name:'kumar'};
const a = z;
b = [1,2];
d=b;


const arr1 = ['kumar',32,174,true];
const arr2 = ['blue','reading book'];
const newArr = [...arr1,...arr2];
const [name,,height,,,hobbie] = newArr;
// console.log(name,height,hobbie);


const car = ['black',4,6,'automatic','petrol',true,15];

const convertToManual =(params)=>{
params[3]='manual';
return params;
}
const changeToManual =([...params])=>{
params[3]='manual';
return params;
}

const manualCar = changeToManual(car);

console.log(car);
console.log(manualCar);


