function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

        //create a new li
        let newLi = document.createElement('li');

        // create a new input
        let checkbox = document.createElement('input');

        // create a delete button
        let deleteButton = document.createElement('button');

        let label = document.createElement('label');

        deleteButton.textContent = ('delete');

        //set the input type
        checkbox.type = "checkbox";

        //set the title
        //newLi.textContent = title;

        label.textContent = title;

        newLi.appendChild(label);

        //attach the checkbox to the li
        newLi.appendChild(checkbox);

        toDoList.appendChild(newLi);

        //add delete button to the li
        newLi.appendChild(deleteButton);

        newLi.className += "mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col";

        checkbox.className +="mdl-checkbox";

        deleteButton.className += "delete mdl-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";

        //empty the input
        newToDoText.value = '';

        //add event listener when delete button is pressed
        deleteButton.addEventListener('click', event => {
            toDoList.removeChild(newLi);
        });
    });
};

window.onload = function(){
    onReady();
};
