function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let personArr = [];

    let firstPerson = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    personArr.push(firstPerson);

    let secondPerson = new Person('SoftUni');
    personArr.push(secondPerson);

    let thirdPerson = new Person('Stephan', 'Nikolov', 25);
    personArr.push(thirdPerson);

    let fourthPerson = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');
    personArr.push(fourthPerson);

    return personArr;
}

console.log(getPersons().join(', '));