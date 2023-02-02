const addTodo = require('./src/modules/addTodo');
/**
 * @jest-environment jsdom
 */
import addTodo from './src/modules/addTodo';
describe('addTodo', () => {
    let form;
    let data;
    beforeEach(() => {
      form = {
        tasks: {
          value: ''
        }
      };
      data = {
        todos: []
      };
      localStorage.setItem('todos', JSON.stringify(data.todos));
    });
  
    it('adds a new todo item to the list', () => {
      form.tasks.value = 'Clean the house';
      const event = { preventDefault: jest.fn() };
      addTodo(event);
      expect(data.todos.length).toBe(1);
      expect(data.todos[0]).toEqual({
        description: 'Clean the house',
        completed: false,
        index: 1
      });
    });
  
    it('does not add an empty todo item to the list', () => {
      form.tasks.value = ' ';
      const event = { preventDefault: jest.fn() };
      addTodo(event);
      expect(data.todos.length).toBe(0);
    });
  });