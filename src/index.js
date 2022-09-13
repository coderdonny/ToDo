import './style.css';
import Task from './create-task';
import { appendTaskForm } from './append-task-form';

const addTaskBtn = document.querySelector('.add-task');

addTaskBtn.addEventListener('click', appendTaskForm);
