//Get reference to the elements
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//Text array to store the todos
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
//  [
//      'Fazer café',
//      'Estudar Javascript',
//      'Acessar comunidade da Rocketseat'
//  ];

function renderTodos(){

    //Clear all elements from the ul
    listElement.innerHTML = '';

    for(todo of todos){
        //create the li element and text content
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //add the option to delete a todo
        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');
        
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);


        //add text content to the li
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        //add the todo (li) to the list
        listElement.appendChild(todoElement);
    }
}

renderTodos();

//Checks if the string is empty (only made of spaces or empty(""))
function isEmptyString(text){
    if(text !== null && text !== undefined){
        return /^\s*$/.test(text);
    }else{
        //else it is an invalid input (string)
        return false;
    }
}

//Add a todo from the input element to the list
function addTodo(){
    //get new todo in input value
    var todoText = inputElement.value;

    if(!isEmptyString(todoText)){
        //add todo text to the todos array
        todos.push(todoText);
        //clear the input element
        inputElement.value = '';

        //Render the todo list again
        renderTodos();
        saveToStorage();
    }
}

//set the addTodo to the onclick handler
buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//Saving the todos to the local storage (not a database, just browser cache)
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}