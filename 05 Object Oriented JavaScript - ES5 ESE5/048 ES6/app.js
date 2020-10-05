class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }


    static addNumbers(x, y){
        return x + y;
    }
}

// SUB CLASS
class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

}


const john = new Customer('John', 'Doe', '555-555-555', 'Standard');


console.log(john.greeting());




const mary = new Person('Mary', 'Williams',);


console.log(mary.calculateAge());


console.log(Person.addNumbers(1,3));