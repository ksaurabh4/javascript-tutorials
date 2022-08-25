console.log('test');

const transaction = {
  in: { 
    1: { amount: 10 }, 
    2: { amount: 40 } 
  },
  out: { 
    1: { amount: 5 }, 
    2: { amount: 25 }
  }
}

const btn = document.getElementById('btn');
const resetBtn = document.getElementById('resetBtn');
const num = document.getElementById('number');

let number = 0;
number = JSON.parse(localStorage.getItem('transaction'));
console.log(number);
num.textContent = number;

const data = {
  data: {
    viewer_v2: {
      claims: []
    }
  }
};
btn.addEventListener('click',()=>{
  number++;
  num.textContent = number;
  localStorage.setItem('transaction', JSON.stringify(data));
})


resetBtn.addEventListener('click', () => {
  localStorage.removeItem('transaction');
  number = 0;
  num.textContent = number;
})
  
// const clearfunction = () => {
//   localStorage.removeItem('customerCount');
// }

// function clearfunction(){
//   localStorage.removeItem('customerCount');
// }

// const clearfunction = function(){
//   localStorage.removeItem('customerCount');
// }

