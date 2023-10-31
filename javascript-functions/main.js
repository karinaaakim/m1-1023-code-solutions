function convertMinutesToSeconds(minutes) {
  const sum = minutes * 60;
  return sum;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
const greetingResult = greet('Beavis');
console.log('greetResult:', greetingResult);

function getArea(width, height) {
  const sum = width * height;
  return sum;
}
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  const getFirstNameResult = person.firstName;
  return getFirstNameResult;
}
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  const getLastElementResult = array.length - 1;
  return array[getLastElementResult];
}
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('getLastElementResult:', getLastElementResult);
