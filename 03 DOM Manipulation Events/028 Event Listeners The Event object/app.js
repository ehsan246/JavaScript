document.querySelector('.clear-tasks').addEventListener('click', onClick);


function onClick(e){
    let val;


    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Clicked'


    // Event type
    val = e.type;


    // Timestamp
    val = e.timeStamp;

    // Coords event relevent to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relevent to the element
    val = e.offsetY;
    val = e.offsetX;   




    console.log(val);
}