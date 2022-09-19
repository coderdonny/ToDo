import './style.css';
// import Task from './create-task';
import { appendTaskForm } from './append-task-form';
import { submitTaskForm } from './submit-task-form';
// import addTaskToArray from './task-array';
// import appendTaskAddButton from './append-add-task-button';
import renderPage from './render-page';
import removeAllChildren from './remove-page';
// import renderTask from './render-task';

//Listens for the dynamically created task form button and triggers the submit task form function
// function formSubmit() {
// 	//retrieves form values from function for new Task creation
// 	let formValues = submitTaskForm();
// 	let title = formValues.title;
// 	let details = formValues.details;
// 	let date = formValues.date;

// 	if (title === '') {
// 		return;
// 	} else {
// 		const newTask = new Task(title, details, date);
// 		const array = addTaskToArray(newTask);
// 		renderTask(newTask);
// 		console.log(array);
// 		console.log(newTask);
// 		document.querySelector('.create-task-li').remove();
// 		taskList.appendChild(appendTaskAddButton());
// 	}
// }

const allTasksTab = document.querySelector('.all-tasks-tab');
const todayTab = document.querySelector('.today-tab');
const weekTab = document.querySelector('.week-tab');

let currentTab = 'all';

allTasksTab.addEventListener('click', function () {
	if (currentTab === 'all') {
		return;
	}
	removeAllChildren();
	currentTab = 'all';
	renderPage(currentTab);
});
todayTab.addEventListener('click', function () {
	if (currentTab === 'today') {
		return;
	}
	removeAllChildren();
	currentTab = 'today';
	renderPage(currentTab);
});
weekTab.addEventListener('click', function () {
	if (currentTab === 'week') {
		return;
	}
	removeAllChildren();
	currentTab = 'week';
	renderPage(currentTab);
});

renderPage(currentTab);
