const variables = require('./variable')

const sayHello = (pet,age,salaryee) => {
    console.log(`Hello ${pet}, your age is ${age} and ur salary is ${salaryee}`);
}
//sayHello(variables.pet,variables.age);
const sayHOHOHO = (salary) => {
    console.log(`Your salary is ${salary}`);
}
//exports.sayHello = sayHello;

module.exports = {sayHello,sayHOHOHO};