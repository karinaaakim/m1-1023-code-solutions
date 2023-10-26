const student = {
  firstName: 'Karina',
  lastName: 'Kim',
  age: 22,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'server';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Ferrari',
  model: 'Testarossa',
  year: 1991,
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

const pet = {
  name: 'Fargo',
  type: 'cat',
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
