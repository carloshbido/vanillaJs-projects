//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Call the Listener
loadEventListener();

//Listeners functions
function loadEventListener(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

/* EVENTS */
//Add Task
function addTask(e){
  e.preventDefault();

  if(taskInput.value === ''){
    alert('Adione ao menos uma Tarefa')
  } 

  //Create li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  // Create Links element and append
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-trash-alt"></i>';

  //Appends
  li.appendChild(link);
  taskList.appendChild(li);

  //Clear Input
  taskInput.value = '';
}

//Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm("Tem certeza que deseja deletar item?")) {
      e.target.parentElement.parentElement.remove()
    }
  }
}

//Clear Tasks
function clearTasks() {
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

//Filter Task
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })

}