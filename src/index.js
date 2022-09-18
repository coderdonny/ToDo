import './style.css';
import Task from './create-task';
import { appendTaskForm } from './append-task-form';
import { submitTaskForm } from './submit-task-form';
import addTaskToArray from './task-array';
import appendTaskAddButton from './append-add-task-button';
import tabManager from './tab-manager';
import renderAllTasks from './render-all-tasks';
import renderTask from './render-task';

const taskList = document.querySelector('.task-list');

//Listens for the dynamically created task form button and triggers the submit task form function
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('task-form-submit-button')) {
		//retrieves form values from function for new Task creation
		let formValues = submitTaskForm();

		let title = formValues.title;
		let details = formValues.details;
		let date = formValues.date;

		if (title === '') {
			return;
		} else {
			const newTask = new Task(title, details, date);
			const array = addTaskToArray(newTask);
			renderTask(newTask);
			console.log(array);
			console.log(newTask);
			document.querySelector('.create-task-li').remove();
			taskList.appendChild(appendTaskAddButton());
		}
	}
});

const allTasksTab = document.querySelector('.all-tasks-tab');
const todayTab = document.querySelector('.today-tab');
const weekTab = document.querySelector('.week-tab');

allTasksTab.addEventListener('click', function () {
	tabManager('all');
});
todayTab.addEventListener('click', function () {
	tabManager('today');
});
weekTab.addEventListener('click', function () {
	tabManager('week');
});
