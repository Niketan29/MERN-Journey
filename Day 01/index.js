//1
let firstVariable = "Hello";
const secondVariable = "Developers"
console.log(firstVariable + " " + secondVariable);


//2
const add = (a, b) => {
    return a + b;
}
const result = add(10, 5);
console.log(result);


//3
console.log(`${firstVariable} ${secondVariable} result of 10 + 5 is ${result}`);


//4
function greet(name = "Niketan") {
    console.log(`Welcome ${name}`)
}
greet();


//5
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);
console.log(second);
console.log(...rest);


//6
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

const combine = [...numbersOne, ...numbersTwo];
console.log(combine);


//7
const user = {
    username: "Niketan",
    age: 23
}
const { username, age } = user;
console.log(username);
console.log(age);


//8
const fruits = ["Mango", "Banana", "Payaya"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);


//9
for (const fruit of fruits) {
    console.log(fruit);
}


//10
fruits.map((item) => {
    console.log(item)
})


//11
const evenNumbers = numbersOne.filter((item) => {
    return item % 2 == 0
})
console.log(evenNumbers);


//12
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)


//13
const data = [
    { name: "A", age: 22 },
    { name: "B", age: 17 },
    { name: "C", age: 25 },
    { name: "D", age: 16 },
];

const adults = data.filter((item) => (item.age >= 18));
console.log(adults);
const adultNames = data.filter((item) => (item.age >= 18)).map((item) => (item.name));
console.log(adultNames);
const avgAdultAge = adults.reduce((sum, person) => sum + person.age, 0) / adults.length;
console.log(avgAdultAge);