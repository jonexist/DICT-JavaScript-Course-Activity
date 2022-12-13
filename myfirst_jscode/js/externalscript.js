const pname = document.querySelector('.studentname');
const pmessage = document.querySelector('.message');

const name = prompt('Enter your name: ');
pname.textContent = `Hi, I'm ${name}`;
pmessage.textContent = 'Welcome to basic JS for Web Dev!';