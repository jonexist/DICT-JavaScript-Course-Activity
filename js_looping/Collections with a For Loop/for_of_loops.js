const cats = [`Pete`, `Biggles`, `Jasmine`];

let myFavoriteCats = 'My cats are called';

for (const cat of cats) {
  myFavoriteCats = `${myFavoriteCats} ${cat}`;
}

console.log (myFavoriteCats);
