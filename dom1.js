/**
 * getElementById() ========> html element
 * getElementsByClassName() //html collections ======> Array.from()
 * getElementsByTagName
 * querySelector()  //node/html element
 * querySelectorAll() // node array
 * parentNode  //access parent
 * children    // access children
 */

// const grandParent = document.getElementById('grand-parent');
// const children = Array.from(document.getElementsByClassName('child'));
//  const children = document.querySelectorAll('.child');
const child1 = document.getElementById('child-1');
// const parents = Array.from(grandParent.children)[1].children;
// const divs = parent2.querySelectorAll('.child');
const child1Parent = child1.parentNode;
changeColor(child1Parent)
console.log(child1Parent);
// children.forEach(console.log)
// children[0].style.backgroundColor = 'brown';
// children[1].style.backgroundColor = 'brown';
// children[2].style.backgroundColor = 'brown';
// children[3].style.backgroundColor = 'brown';
// children[4].style.backgroundColor = 'brown';
// children[5].style.backgroundColor = 'brown';
// children[6].style.backgroundColor = 'brown';
// children[7].style.backgroundColor = 'brown';

function changeColor(element){
  element.style.background = 'brown';
}

// forEach(children);

// function forEach(arr){
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   element.style.background = 'brown'
// }
// }
