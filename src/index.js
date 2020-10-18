import './styles.css'
import { TodoList, Todo } from './classes'
import { crearTodoHtml } from './js/components';
// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';


// const tarea = new Todo('Aprender JavaScript')
export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);