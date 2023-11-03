// the Math Object
const number1 = 7;
const number2 = 3;
const number3 = 9;

const maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);

const heroes = ['Iron Man', 'Black Widow', 'Black Panther', 'Captain America'];
let randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods
const object1 = { title: 'Animal Farm', author: 'George Orwell' };
const object2 = { title: 'Paradise Lost', author: 'Arthur Miller' };
const object3 = { title: 'Of Mice and Men', author: 'John Steinbeck' };
const library = [object1, object2, object3];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

// String Methods
const fullName = 'Karina Kim';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
