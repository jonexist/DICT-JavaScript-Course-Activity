const changeName = document.querySelector('p');

changeName.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name: ');
  changeName.textContent = `Player 1: ${name}`;
}