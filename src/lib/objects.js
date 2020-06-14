const createPerson = (name, age) => {
  return {
    "name": name,
    "age": age
  }
};

const getName = object => {
  return object["name"];
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Boolean(object[property]);
};

const isOver65 = person => {
  return Boolean((person["age"]) > 65);
};

const getAges = people => {
  return people.values(age);
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
