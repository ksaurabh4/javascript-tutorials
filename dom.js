/**
 * getElementById() ========> html element
 * getElementsByClassName() //html collections ======> Array.from()
 * getElementsByTagName()
 * querySelector()  //node/html element
 * querySelectorAll() // node array
 * parentElement  //access parent
 * children    // access children
 * closest //get the closest element upwards
 * nextElementSibling //get next sibling
 * previousElementSibling
 */

// const grandParent = document.getElementById('#grand-parent');
// const grandParent = document.querySelector('#grand-parent');
// const parents = Array.from(document.getElementsByClassName('parent'));
// const parents = document.querySelectorAll('.parent');
const child1 = document.querySelector('.child-1');
// const parent = child1.closest('.parent');
const nextSibling = child1.nextElementSibling;
const prevSibling = nextSibling.previousElementSibling;
console.log(prevSibling);
// console.log(parents[0].children);
// parents.forEach(changeColor);
// changeColor(parent)
function changeColor(element){
  element.style.backgroundColor = 'grey';
}

