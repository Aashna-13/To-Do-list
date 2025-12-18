let todoList = JSON.parse(localStorage.getItem('todoList')) || [];


render();


function addTo() {
const taskInput = document.getElementById('input-holder');
const dateInput = document.getElementById('date-holder');


if (taskInput.value === '' || dateInput.value === '') {
alert('Please enter task and date');
return;
}


todoList.push({
task: taskInput.value,
date: dateInput.value
});


taskInput.value = '';
dateInput.value = '';


saveToStorage();
render();
}

function render() {
const container = document.getElementById('todo-container');
container.innerHTML = '';


for (let i = 0; i < todoList.length; i++) {
const item = todoList[i];


const div = document.createElement('div');
div.className = 'todo-item';


div.innerHTML = `
<span>${item.task}</span>
<span>${item.date}</span>
<button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
`;


container.appendChild(div);
}
}


function deleteTodo(index) {
todoList.splice(index, 1);
saveToStorage();
render();
}

function saveToStorage() {
localStorage.setItem('todoList', JSON.stringify(todoList));
}