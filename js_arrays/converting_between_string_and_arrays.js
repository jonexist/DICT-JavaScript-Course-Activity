//Using split method
const data = 'Manchester,London,Loverpool,Birmingham,Leeds,Carlisle';

const cities = data.split(',');
cities;

console.log(cities);
//end

//Using join method
const commaSeparated = cities.join(',');
commaSeparated;
console.log(cities);
//end

//Converting array to string using toString method
const dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger']
dogNames.toString();
//end
