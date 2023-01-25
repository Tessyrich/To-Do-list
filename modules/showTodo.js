import todos from './todoData.js';

const showTodo = () => {
  todos.sort((a, b) => a.index - b.index);
  const todoList = document.querySelector('.todo-list');
  const todoApp = todos.map((todo) => `        
        <li id=${todo.index}><input type="checkbox">${todo.description} <i class="fas fa-ellipsis-v"></i> </li>        
      `);
  todoList.innerHTML = todoApp.join('');
};

export default showTodo;