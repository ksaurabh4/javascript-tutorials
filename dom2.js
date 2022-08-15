/**
 * createElement()
 * appendChild() //append elements only and one thing at one time
 * append() //append anything
 * innerText     // only print which is on screen
 * textContent    // pring all content availble in html
 * innerHTML    //render html content but it is not the right way
 * remove()     //remove any element
 * removeChild()   //remove child element
 * getAttribute()   //get attribute ====> it can also be directly accessed like(div.id OR div.title)
 * setAttribute()   //set attribute ====> it can also be directly set like(div.id = 'hello' OR div.title = 'name')
 * removeAttribute() //remove attribute
 * dataset //   access data attributes like data-test or data-longer-name (object delete keyword)
 * classList   // property to access classes
 *      add(),remove(),toggle(),contains(), forEach(), replace()
 * style // property to use css property
 */

// const div = document.createElement('div');
// const body = document.querySelector('body');
// div.textContent = 'My name is Kumar Saurabh'
// const text = document.createTextNode(' — the premier source for web development knowledge.');
// body.appendChild(div);
// div.appendChild(text);
// body.append('Hello World' , 'hello friend')
// body.append(div);
// div.innerText = 'hello world';
// div.textContent = 'hello world2';

// const helloDiv = document.querySelector('div');
// console.log(helloDiv.dataset.longerMode);
// helloDiv.dataset.newName = 'greet';

// div.classList.add('hello')
// div.classList.add('hi')
// div.classList.add('myname')
// div.classList.remove('hello')
// div.classList.toggle('myname', false)



// const div = document.createElement('div');
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const div = document.querySelector('.newDiv')
// div.innerText = 'Hello World';
// div.textContent = 'Hello World';
// body.appendChild(div);
// console.log(body.innerText);
// console.log(body.textContent);
// div.append('text')
// div.innerHTML = '<h1>My name is Kumar</h1>'
// div.innerText = 'My name is Kumar';

// btn.addEventListener('click',()=>{
// })

// body.append(div);

// // setTimeout(, 2000);
// btn.removeEventListener('click', () => { console.log('removed') })
// body.removeChild(div);
// div.remove();
// btn.addEventListener('click',()=>{
//   div.remove();
// })


// console.log(btn.getAttribute('param'));
// console.log(btn.title);
// btn.setAttribute('param','xyz');
// btn.title = 'click me twice';
// btn.removeAttribute('title');

// div.style.backgroundColor= 'red'

// div.classList.add('textcolor','fonttext')
// div.classList.add( 'zoomOut')
// btn.classList.add('newClass')
// div.classList.remove('newClass','test','class2')

// div.classList.toggle('bgcolor')
// let error = false;

// btn.addEventListener('click',()=>{
//   error = !error;
//   if (error) {
//     div.classList.add('error')
//   } else {
//     div.classList.remove('error')
//   }
// })

// div.addEventListener('mouseover',()=>{
//   div.classList.add('zoomOut')
// })

// div.addEventListener('mouseout',()=>{
//   div.classList.remove('zoomOut')
// })

// div.classList.toggle('zoomOut',true);
// div.classList.toggle('zoomOut',false);
// div.classList.contains('textcolor');

// div.classList.toggle('textcolor');

// if (div.classList.contains('textcolor')){
//   div.classList.remove('textcolor')
// }else{
//   div.classList.add('textcolor')
// }

// div.classList.forEach((cls)=>console.log(cls));
// div.classList.replace('bgcolor','textcolor');
const divs = document.querySelectorAll('div')
console.log(div.dataset);
div.dataset.newDataSet = 'testing';
delete div.dataset.longerName;

divs.forEach((ele)=>{
  if (ele.classList.contains(div.dataset.newDataSet)){
  console.log(ele,'falsdjfjasjdfl');
}
})



const obj = {name:'kumar',age:32,height:173}
console.log(obj);
delete obj.height;
console.log(obj);

const randomNum = Math.trunc(Math.random()*2) === 1;
console.log(randomNum);

