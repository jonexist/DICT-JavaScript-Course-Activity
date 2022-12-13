const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = "It is sunny day! A great time to play.";
      break;
    
    case 'rainy':
      para.textContent = "It is rainy day! You should stay inside and watch TV.";
      break;
    
    case 'snowing':
      para.textContent = "It's snowing lets play snowball fight!";
      break;
    
    case 'overcast':
      para.textContent = "Its not raining but the clouds is really dark we should bring umbrella.";
      break;
    
    default:
      para.textContent = '';
  }

}