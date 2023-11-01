/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  console.log(person);
  return (
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.'
  );
}
