class Dog {
    constructor(name, age) {
        if (typeof age === 'undefined') {
            // Constructor for just name
            this.name = name;
            this.age = 0; // Default age
        } else if (typeof age === 'number') {
            // Constructor for name and age
            this.name = name;
            this.age = age;
        } else {
            throw new Error('Invalid arguments');
        }
    }

    constructor (name, breed, age, gender){
        this.name=name;
        this.greed=breed;
        this.age=age;
        this.gender=gender;
    }

    bark() {
        console.log(`${this.name} says woof!`);
    }
}

// Creating instances of Dog
const dog1 = new Dog('Buddy'); // Only name provided
const dog2 = new Dog('Max', 5); // Name and age provided

console.log(dog1); // Dog { name: 'Buddy', age: 0 }
console.log(dog2); // Dog { name: 'Max', age: 5 }

dog1.bark(); // Outputs: Buddy says woof!
dog2.bark(); // Outputs: Max says woof!
