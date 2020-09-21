

//////////////////////////////////////////
//////          SECTION #8          //////
//////////////////////////////////////////
// Object Literals

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 1987;
    }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];




val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();



const people = [
    {name: 'John', age:30},
    {name: 'Mike', age:23},
    {name: 'Nancy', age:40},
];


for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}





console.log(val);








//////////////////////////////////////////
//////          SECTION #7          //////
//////////////////////////////////////////
// Arrays Array Methods


// // Create some arrays
// const numbers = [43,56,33,23,44,36,6];
// const number2 = new Array(22,45,33,76,54);
// const fruit = ['apple', 'banana', 'orange'];
// const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;


// // Get array
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // get single value
// val = numbers[3];
// // Insert into array
// numbers[20] = 100;
// // Find index of value
// val = numbers.indexOf(36);



// // // MUTATING ARRAYS
// // // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from start
// // numbers.shift();
// // // Splice values
// // numbers.splice(1,3);
// // // Reverse
// // numbers.reverse();



// // // Concatenate array
// // val = numbers.concat(number2);



// // // Sorting arrays
// // val = fruit.sort();
// // val = numbers.sort()



// // // Use the "Compate Function"
// // val = numbers.sort(function(x, y){
// //     return x - y;
// // });



// // // Reverse sort
// // val = numbers.sort(function(x, y){
// //     return y - x;
// // });



// // Find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50);







// console.log(numbers);
// console.log(val);













//////////////////////////////////////////
//////          SECTION #6          //////
//////////////////////////////////////////
// Template Literals


// const name = 'John';
// const age = '30';
// const job = 'Web Developer';
// const city = 'Miami';

// let html;


// // Without template string (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li> </ul>';



// html = '<ul>' +
//         '<li>Name: ' + name + '</li>' +
//         '<li>Age: ' + age + '</li>' +
//         '<li>Job: ' + job + '</li>' +
//         '<li>City: ' + city + '</li>' +
//         '</ul>';




// // Without template string (es6)
// function hello(){
//     return 'hello';
// }


// html = `
//      <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 29 ? 'over 30' : 'Under 30'}</li>
//     </ul>
// `






// document.body.innerHTML = html;














//////////////////////////////////////////
//////          SECTION #5          //////
//////////////////////////////////////////
// String Methods Concatenation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is Brad.'

// let val;

// val = firstName + lastName;




// // Concatenation
// Val = firstName + ' ' + lastName;




// // Append
// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;




// // Escaping
// val = 'That\s awesome, I can\t sait';



// // Length
// val = firstName.length;




// // Concat
// val = firstName.concat(' ', lastName);



// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();


// val = firstName[3];




// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');




// // charAt()
// val = firstName.charAt('2');
// // Get last Char
// val = lastName.charAt(firstName.length - 1);



// // substring()
// val = firstName.substring(0, 4);



// // slice()
// val =firstName.slice(0,4);
// val =firstName.slice(-4);



// // split()
// val = str.split(' ');



// // replace()
// val = str.replace('Brad', 'Jack');



// // includes()
// val = str.includes('foo');









// console.log(val);






//////////////////////////////////////////
//////          SECTION #4          //////
//////////////////////////////////////////
// Numbers the math object


// const num1 = 100;
// const num2 = 50;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,55,6,3,-2);
// val = Math.max(2,33,4,1,55,6,3,-2);
// val = Math.random();


// val = Math.floor(Math.random() * 20 + 1);



// console.log(val);








//////////////////////////////////////////
//////          SECTION #3          //////
//////////////////////////////////////////
// TYPE CONVERSION



// // Number to string
// val = 5;
// val = String(5);
// val = String(4+4);
// // Boolian to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string
// val = String([1,2,3,4]);


// // toString()
// val = (5).toString();
// val = (true).toString();


// // String to number
// val = '5';
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('Hello');
// val = Number([1,2,3]);








// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed());




//////////////////////////////////////////
//////          SECTION #2          //////
//////////////////////////////////////////

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);




// //Initiling var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $

// // Can not start with number





// // Multi word vars
// var firstName = 'John'; // Camel case






// // LET
//     let name = 'John Doe';
//     console.log(name);
//     name = 'Steve Smith';
//     console.log(name);



// // CONST
// const name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);





//////////////////////////////////////////
//////          SECTION #1          //////
//////////////////////////////////////////

    // // Log to console
    // console.log('hello world'); //string
    // console.log(123); //integer
    // console.log(true);// bullian
    // var greeting = 'Hello';
    // console.log(greeting);//vaiable
    // console.log([1,2,3,4]);// array
    // console.log({a:1,b:2});
    // console.table({a:1,b:2});

    // console.error('this in an error');

    // console.clear();
    // console.warn('this in an warning');


    // console.time('hellow');
    //     console.log('hello world');
    //     console.log('hello world');
    //     console.log('hello world');
    //     console.log('hello world');
    // console.timeEnd('hellow');



/*
multi
line 
comments
*/