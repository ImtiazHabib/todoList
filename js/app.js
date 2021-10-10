// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

// ---------- code start here 
//task 1 : add todo list element 
// --- capture all start and end points 
// --- take input 
// --- add event on submit
// ------- add them in todo-list

//task 1 : add todo list element 
// --- capture all start and end points 
//* start point 
const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
// **end point 
const todoListUl = document.querySelector('.todo-list');

// --- button press active event
todoButton.addEventListener('click', function (event) {
    //   ----------- prevent default event machanism
    event.preventDefault();

    // ----capture input text in variable
    const todoInputValue = todoInput.value;

    // ---- todo div create where li,button create 
    // -----------todo div create 
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    // -----------li create 
    const todoItemLi = document.createElement('li');
    todoItemLi.className = 'todo-item';
    todoItemLi.innerText = todoInputValue;

    // ----------- button create
    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.innerHTML = '<i class="fas fa-edit"></i>';

    const checkButton = document.createElement('button');
    checkButton.className = 'check';
    checkButton.innerHTML = '<i class="fas fa-check"></i>';

    const trashButton = document.createElement('button');
    trashButton.className = 'trash';
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';

    // ----------- add li and btn in todo div 
    todoDiv.appendChild(todoItemLi);
    todoDiv.appendChild(editButton);
    todoDiv.appendChild(checkButton);
    todoDiv.appendChild(trashButton);


    // ---- add todo div in ul( todo-list )
    todoListUl.appendChild(todoDiv);

    todoInput.value = '';
})

// task 2: active edit and delete functionality
todoListUl.addEventListener('click', function (event) {

    const clickPosition = event.target;

    if (clickPosition.className == 'check') {
        const checkClassParent = clickPosition.parentElement;
        // console.dir(checkClassParent);
        checkClassParent.classList.add('completed');
    } else if (clickPosition.className == 'trash') {
        const trashParent = clickPosition.parentElement;
        trashParent.classList.add('drop-effect');
        trashParent.addEventListener('transitionend', function () {
            trashParent.remove();
        });
    } else if (clickPosition.className == 'edit') {
        const editParent = clickPosition.parentElement;
        const previousLi = editParent.children[0];
        const previousText = editParent.textContent;


        // make input field
        const todoItemInput = document.createElement('input');
        todoItemInput.type = 'text';
        todoItemInput.value = previousText;

        // append in todo
        editParent.insertBefore(todoItemInput, previousLi);
        previousLi.remove();

        // switch to save 
        clickPosition.innerHTML = '<i class="fas fa-save"></i>';
        clickPosition.className = 'save';
        console.dir(clickPosition);


    } else if (clickPosition.className == 'save') {
        // capture text 
        const todoDiv = clickPosition.parentElement;
        console.log("hello");

        const previousInput = todoDiv.children[0];


        // make list
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerText = previousInput.value;

        // append to tododiv
        todoDiv.insertBefore(li, previousInput);
        previousInput.remove();
        // switch back to edit
        clickPosition.className = 'edit';
        clickPosition.innerHTML = '<i class="fas fa-edit"></i>';
    }

})
