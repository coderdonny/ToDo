import './style.css';
import Task from './create-task';
import { appendTaskForm } from './append-task-form';
import { submitTaskForm } from './submit-task-form';
import renderPage from './render-page';
import addTaskToArray from './task-array';

//Listens for click on the add task button and appends task form
const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', appendTaskForm);

//Listens for the dynamically created task form button and triggers the submit task form function
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('task-form-submit-button')) {
		//retrieves form values from function for new Task creation
		let formValues = submitTaskForm();

		let title = formValues.title;
		let details = formValues.details;
		let date = formValues.date;

		const newTask = new Task(title, details, date);
		const array = addTaskToArray(newTask);
		console.log(array);
		console.log(newTask);
	}
});

const taskList = document.querySelector('.task-list');

//Removes the task form when exit button is clicked
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('create-task-exit')) {
		taskList.removeChild(taskList.lastChild);
		console.log('exit');
	}
});

const allTasksTab = document.querySelector('.all-tasks-tab');
const todayTab = document.querySelector('.today-tab');
const weekTab = document.querySelector('.week-tab');

allTasksTab.addEventListener('click', function () {
	console.log('all tasks');
	renderPage();
});
todayTab.addEventListener('click', function () {
	console.log('todays tasks');
});
weekTab.addEventListener('click', function () {
	console.log('weeks tasks');
});
