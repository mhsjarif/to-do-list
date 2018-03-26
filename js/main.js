/*----- constants -----*/


/*----- app's state (variables) -----*/
var toDos, displayMode, displayToDos;

/*----- cached element references -----*/
var newToDo = document.getElementById("newToDo");
var taskList = document.getElementById("tasks");

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', clickHandler);

/*----- functions -----*/

function clickHandler() {
    var newLi = document.createElement('li')    
    newLi.textContent = newToDo.value
    tasks.appendChild(newLi);
    render();
    
}

function initialize() {
    toDos = [];
    displayMode = 'All';
}

function render() {
    newToDo.value = '';
}




/*
*/