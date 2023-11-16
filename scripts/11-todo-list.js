const todoList = [{
  name: 'make-dinner ',
  dueDate: '2023-11-12'
},{
  name: 'wash-dishes',
  dueDate: '2023-10-11'
}];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    const {name} = todoObject;
   //const dueDate =todoObject.dueDate; destructing
   const {dueDate} = todoObject;
    const html = `
    
      <div>${name}</div>
      <div>${dueDate} </div> 
      <button onClick="
      todoList.splice(${i},1);
      renderTodoList();
      " class = "delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
  
 
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML
}


function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name =inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
    //name: name,
    //dueDate: dueDate shorthand property syntax
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value =''

  renderTodoList();
}