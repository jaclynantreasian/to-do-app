function onReady() {
    console.log('onReady');
    let id = 0
    let toDos = [];

    if (localStorage.getItem('toDosArray')) {
      toDos = JSON.parse(localStorage.getItem('toDosArray'));
    }
console.log(toDos);
    const addToDoForm = document.getElementById('addToDoForm');

    // pushes the text field you entered into an array
    function createNewToDo(){
        console.log('createNewToDo method hit');
        const newToDoText = document.getElementById('newToDoText');
        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id++
        });
        newToDoText.value = '';
        renderTheUI();
    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';
        // creates a li an checkbox and a delete button when you create an to do list item
        toDos.forEach(toDo => {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const deleteButton = document.createElement('button');

            checkbox.type = "checkbox";
            newLi.textContent = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteButton);

            newLi.className += "mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col";
            deleteButton.className += "delete mdl-button mdl-button--raised mdl-button--colored"
            checkbox.className +="mdl-checkbox";
            checkbox.checked = toDo.complete;
            console.log(checkbox.value);

            deleteButton.textContent = "Delete";

            //returns toDos that haven't been deleted
            deleteButton.addEventListener('click', event => {
                toDos = toDos.filter( dtd => {
                    return toDo.id !== dtd.id;

                })
                renderTheUI();
            });
            //see if checkbox is checked
            checkbox.addEventListener('change', event => {
            toDo.complete = event.target.checked
                localStorage.setItem('toDosArray', JSON.stringify(toDos));
            });
        });
        //stringifies ToDos
        localStorage.setItem('toDosArray', JSON.stringify(toDos));
    }
    renderTheUI();

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });
}
window.onload = function(){
    onReady();
}
