// Person Constructor
function Person(firstName, lastName, dob){
    this.name = name;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullname = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;
}




const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');


console.log(john.calculateAge());
console.log(mary.getFullname());
mary.getsMarried('Smith');
console.log(mary.getFullname());
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullname'));