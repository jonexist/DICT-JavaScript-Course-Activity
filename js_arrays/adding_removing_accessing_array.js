const cities = ['Manchester', 'Liverpool'];

//adding items to the array using push method
//The method used to add one or more items to the end of the array.
cities.push('Cardiff');
cities.push('Bradford', 'Brighton');
console.log(cities);
//end

//New length
const newLength = cities.push('Bristol');
console.log(newLength);
//end

//adding items to the start of the array using unshift method
cities.unshift('Edinburgh');
console.log(cities);
//end

//Removing items to the array using pop method
cities.pop();
console.log(cities);
//end

//Saving items to the array using pop method
const removeCity = cities.pop();
console.log(removeCity);
//end

//Removing first items to the array using shift method
cities.shift();
console.log(cities);
//end

//Remove items using splice method
const index = cities.indexOf('Liverpool');

if (index !== -1) {
  cities.splice(index, 1);
}

console.log(cities);
//end

//Accessing every items in the array using for of statement
const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
}
//end

//Accessing every items in the array using map method
function double (number) {
  return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled);
//end

//Creating new array containing only the items in the original array that match some test using filter method
function islong (city) {
  return city.length > 3;
}
const lugar = ['London', 'Liverpool', 'Totness', 'Edenburgh'];
const longer = lugar.filter(islong);
console.log(longer);
//end