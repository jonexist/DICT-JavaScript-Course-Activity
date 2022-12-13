function calculate() {

  for(let i = 1; i < 10; i++){
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += '\n...finished!';

}
  const calculateBtn = document.querySelector('#calculate');
  const clearBtn = document.querySelector('#clear');

  calculateBtn.addEventListener('click', calculate);
  clearBtn.addEventListener('click', () => results.textContent = '');