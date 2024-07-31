// import { abc as content} from "./util.js";
// // import apiKey  from "./util.js";
// import * as util from "./util.js"
// console.log(util.abc)
// console.log(content)
// console.log(util.default)

let userMessage = "Hello World!";
console.log(userMessage);
console.log(userMessage);
console.log(userMessage);

const userName = "I am zanj0";

console.log(userName);
console.log(userName);
console.log(userName);

console.log(10 / 5);
console.log(10 + 5);
console.log("first part " + "second part");

function greet(userName, message, delimeter = "?") {
  console.log("Hello", userName, "", message, delimeter);
}

greet("zanj0", "how are you");
greet("agnichak", "how are you");

export default (userName, message) => {
  console.log("Hello!");
  return userName + message;
};

const user = {
  name: "zanj0",
  phoneNumber: 1234,
  greet() {
    console.log("Hello!");
  },
};
console.log(user);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Agnibha", 1342);
console.log(user1);

const hobbies = ["cooking", "reading"];

console.log(hobbies);
console.log(hobbies[1]);
hobbies.push("working");
console.log(hobbies);

// const index = hobbies.findIndex((item)=>{
//     return item === 'working'
// });

const index = hobbies.findIndex((item) => item === "working");

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);

// const userNameData = ["Agnibha", "Chakraborty"]

// const firstName = userNameData[0];
// const lastName = userNameData[1];

const [firstName, lastName] = ["Agnibha", "Chakraborty"];

console.log(firstName);
console.log(lastName);

const SomeUser = {
  name: "Max",
  age: 34,
};

const { name: userNameModified, age } = {
  name: "Max",
  age: 34,
};

console.log(userNameModified, age);

const newHobbies = ["a", "b", "C"];
const otherHobbies = ["d", "e", "f"];

const mergedHobbies = [...newHobbies, ...otherHobbies];
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...SomeUser,
};
console.log(extendedUser);
// const password = prompt("what is your password?")
// if (password === "hello") {
//         console.log("hello works!");
// } else if (password === "agnibha") {
//     console.log("agnibhe works!");
// } else {
//     console.log("Nothing works!");
// }

const someArray = ["a", "b", "c"];

for (const item of someArray) {
  console.log(item);
}

// Function as value to other function

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out again!");
};
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 2000);
setTimeout(() => {
  console.log("More timeout");
}, 4000);

function greeter(greetFn) {
  greetFn();
}
greeter(() => console.log("hi"));

function init(){
    function greet(){
        console.log("Hi!");
    }
    greet();
}

init();

let someMessage = 'Hello';
someMessage = someMessage.concat("1!");