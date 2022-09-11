import './style.css';
import Task from './create-task';

console.log('tailwindcss webpack test hello');

const addTaskBtn = document.querySelector('.add-task');

addTaskBtn.addEventListener('click', function () {
	console.log('Click Click');
});

const newTask = new Task('bye', 'hello', 'hello');

console.log(newTask);
