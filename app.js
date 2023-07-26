// Assignment 1
console.log('Assignment 1 answers');

const fruits = [];
fruits[0] = "apple";
fruits[1] = "banana";
fruits[2] = "orange";

console.log("Fruits which are in array are" + fruits);

let fruit1 = fruits.shift();
console.log("After remove of first array emelent", fruits);
console.log("Elemented poped out", fruit1);

fruits.push('grape');
console.log("after insertion of grape at the end", fruits);

fruits[1] = "pear";
console.log("after addition of element", fruits);

console.log("after performing operations", fruits);



// Assignment 2
console.log('Assignment 2 answers');

let person ={};
person.name = "John";
person.age = "30";
person.city = "New York";
console.log("object elements", person);

delete person.age;
console.log("after deleting age", person);

person.job = "Engineer";
console.log("Addition of new property", person);

person.city = 'San Francisco';
console.log("After updating city", person);

console.log("After performing the operations", person);


//Assignment 3
console.log('Assignment 3 answer');

const cars = [];

cars.push(
    {
    make: "Toyota",
    model: "camry",
    year: "2018",
    },

    {
    make: "Hyundai",
    model: "Creta",
    year:"2019",
    },

    {
    make: "Suzuki",
    model: "Baleno",
    year: "2018",
    }

);   
console.log("Array elemets", cars);

cars.shift();
console.log("after Removal", cars);

cars.push(
    {
    make: "Honda",
    model: "Civic",
    year: "2020"
    }
);
console.log("After insertion", cars);

cars[1].model = "Accord";
console.log("after upadte", cars);

console.log("After completion of operation", cars);










