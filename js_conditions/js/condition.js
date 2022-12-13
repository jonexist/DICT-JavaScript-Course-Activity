const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = "It is sunny day! A great time to play.";
  } else if (choice === 'rainy') {
    para.textContent = "It is rainy day! You should stay inside and watch TV.";
  } else if (choice === 'snowing') {
    para.textContent = "It's snowing lets play snowball fight!";
  }else if (choice === 'overcast') {
    para.textContent = "Its not raining but the clouds is really dark we should bring umbrella.";
  }else {
    para.textContent = "";
  } 
}