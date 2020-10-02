// Set Local Storage Item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set Session Storage Item

// sessionStorage.setItem('name', 'Beth');


// Remove From Storage
// localStorage.removeItem('name');


// Get from Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear Local Storage
// localStorage.clear();

// console.log(name, age);













document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').nodeValue;



    // Pulling data from storage
    let tasks;
    
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }


    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');


    e.preventDefault();
});






const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(tasks){
    console.log(task);
});