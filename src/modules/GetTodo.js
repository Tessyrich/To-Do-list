import data from '../modules/todoData.js';
import display from '../modules/Display.js';

const getTodos = () => {
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('todos')) {
      data.todos = JSON.parse(localStorage.getItem('todos'));
      display();
    }
  });
};

export default getTodos;