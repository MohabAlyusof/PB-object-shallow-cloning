const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
  const updatedPerson = { ...person, fullName: `${person.firstName} ${person.lastName}` };
  return updatedPerson;
};

const updatedPerson = addFullName(person);

console.log(addFullName(updatedPerson));
console.log(person);
