
//############ Chapter = 1 #############//
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
//////          SECTION #8          //////
//////////////////////////////////////////
// Object Literals

// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 1987;
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person["lastName"];




// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();



// const people = [
//     {name: 'John', age:30},
//     {name: 'Mike', age:23},
//     {name: 'Nancy', age:40},
// ];


// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }





// console.log(val);












//////////////////////////////////////////
//////          SECTION #9          //////
//////////////////////////////////////////
// If  Statement

// const id = 100;

// // // EQUAL TO
// // if(id == 100){
// //     console.log('CORRECT');
// // } else{
// //     console.log('INCORRECT')
// // }



// // // NOT EQUAL TO
// // if(id != 101){
// //     console.log('CORRECT');
// // } else{
// //     console.log('INCORRECT')
// // }


// // // EQUAL TO VALUE AND TYPE
// // if(id === 100){
// //     console.log('CORRECT');
// // } else{
// //     console.log('INCORRECT')
// // }





// // // TEST IF There Is an ID on Not
// // if(typeof id !== 'undefined'){
// //     console.log(`The ID is  &{id}`);
// // } else {
// //     console.log('NO ID');
// // }






// // // GREATER OR LESS THAN
// // if(id > 200){
// //     console.log('correct');
// // } else {
// //     console.log('incorrect');
// // }





// // // IF ELSE

// // const color = 'red';

// // if(color === 'red'){
// //     console.log('color is red');
// // } else if(color === 'blue') {
// //     console.log('color is blue');
// // } else {
// //     console.log('color is not red or blue');
// // }





// // LOGICAL OPERATORS
// const name = 'Steve';
// const age = 20;

// if (age > 0 && age <12){
//     console.log(`${name} is a child`);
// } else if (age >= 13  && age <= 19){
//     console.log(`${name} is a adult`);
// }



// // OR ||

// if (age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// } else {
//     console.log(`${name} is registered for the race`);
// }




// // TERNARY OPERATOR
// console.log(id === 100 ? 'Correct' : 'Incorrect')













//////////////////////////////////////////
//////          SECTION #10         //////
//////////////////////////////////////////
// Switch

// const color = 'red';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
                
// }
// console.log(day);











//////////////////////////////////////////
//////          SECTION #11         //////
//////////////////////////////////////////
// FUNCTION DECLARATION



// function greet(firstName = 'John', lastName = 'Doe'){
//     //console.log('Hello');
//     return 'Hello ' + firstName + ' ' + lastName;

// }





// // FUNCTION EXPRESIONS

// console.log(greet());

// const square = function(x =){
//     return x*x;
// };

// console.log(square());




// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS

// (function(){
//     console.log('IIFE run...');
// })();




// (function(name){
//     console.log('IIFE run...' + name);
// })('Brad');





// // PROPERTY METHODS

// const todo = {
//     add: function(){
//         console.log('Add todo..');
//     },
//     edit: function(id){
//         console.log(`Edit to do ${id}`);
//     }
// }

// // TO DECLEAR FUNCTION OF THIS OBJECT OUTSIDE OF THIS OBJECT
// todo.delete = function(){
//     console.log('Delete');
// }

// todo.delete();

// todo.add();
// todo.edit(22);












//////////////////////////////////////////
//////          SECTION #12         //////
//////////////////////////////////////////
////// LOOPS



// FOR LOOP

// for(let i = 0; i <= 10; i++){
//     //console.log('Number ' + i);
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log('Number ' + i);
// }




// // WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }





// // DO WHILE LOOP

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);




// LOOP THROUGH ARRAY

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }



// // FOR EACH LOOP

// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });




// // MAP

// const users = [
//     {id: 1, name:'John'},
//     {id: 2, name:'Sara'},
//     {id: 3, name:'Karen'},
//     {id: 4, name:'Steve'}
// ];


// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);






// // FOR IN

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for (let x in user){
//     console.log(`${x} : ${user[x]}`);
    
// }














//////////////////////////////////////////
//////          SECTION #13         //////
//////////////////////////////////////////
////// WINDOW METHODS / OBJECT / PROPERTIES

// // Alert
// alert('hello');



// // Prompt
// const input = prompt();

// alert(input);


// // Confirm
// if(confirm('Are you sure')){
//     console.log('Yes');
// } else {
//     console.log('No');
// }




// let val;

// Outter height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll point
// val = window.screenX;
// val = window.screeny;


// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search; 


// Redirect
//val = window.location.href = 'http://google.com';


//Reload
//val = window.location.reload();

// History Object
// val = window.history.go(-1)
// val = window.history.length;

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;





// console.log(val);




//////////////////////////////////////////
//////          SECTION #14         //////
//////////////////////////////////////////
////// Scope


// // Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }
// test();


// if(true) {
//     // Block Scope
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log('If Scope: ', a, b, c);
// }


// for(var a = 0; a < 10 ; a++){
//     console.log(`Loop: ${a}`);
// }





// console.log('Global Scope: ', a, b, c);