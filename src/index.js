import './style.css';
import Task from './create-task';
import { appendTaskForm } from './append-task-form';
import { submitTaskForm } from './submit-task-form';
import renderPage from './render-page';
import removeAllChildren from './remove-page';
import renderTasks from './render-tasks';

export const allTasks = [
	{
		title: 'Clean the Dishes',
		details: 'Be done by 5pm',
		dueDate: '2022-07-11',
	},
	{
		title: 'Walk the dog',
		details: 'give him a bath after',
		dueDate: '2022-07-11',
	},
	{
		title: 'Finish work assignment',
		details: 'hand it in before 8pm',
		dueDate: '2022-07-11',
	},
	{
		title: 'Go grocery shopping',
		details: 'eggs, bacon, bread, blueberries',
		dueDate: '2022-07-11',
	},
	{
		title: 'Walk the dog',
		details: 'give him a bath after',
		dueDate: '2022-07-11',
	},
	{
		title: 'Clean the car',
		details: 'N/A',
		dueDate: '2022-07-11',
	},
	{
		title: 'Get a haircut',
		details: 'N/A',
		dueDate: '2022-07-11',
	},
];

let currentTab = 'all';

//submits form, adds task to array and sends values to Task class
document.addEventListener('submit', function (e) {
	e.preventDefault();
	const taskForm = e.target;
	let formValues = submitTaskForm();
	let title = formValues.title;
	let details = formValues.details;
	let date;
	if (formValues.date === '') {
		date = 'N/A';
	} else {
		date = formValues.date;
	}

	const newTask = new Task(title, details, date);
	allTasks.push(newTask);

	console.log(newTask);

	console.log('submit form test');
	console.log(allTasks);

	const modalContainer = document.querySelector('.modal-container');
	modalContainer.classList.add('hidden');

	removeAllChildren();
	currentTab = 'all';
	renderPage(currentTab);
	renderTasks();

	const taskFormDOM = document.querySelector('.task-form');
	taskFormDOM.reset();
});

const allTasksTab = document.querySelector('.all-tasks-tab');
const todayTab = document.querySelector('.today-tab');
const weekTab = document.querySelector('.week-tab');

allTasksTab.addEventListener('click', function () {
	if (currentTab === 'all') {
		return;
	}
	removeAllChildren();
	currentTab = 'all';
	renderPage(currentTab);
	renderTasks();
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
renderTasks();

const taskList = document.querySelector('.task-list');
const addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener('click', function () {
	console.log('hello');
});

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('add-task')) {
		const modalContainer = document.querySelector('.modal-container');
		modalContainer.classList.remove('hidden');
		console.log('add task click');
	}
});

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('create-task-exit')) {
		const modalContainer = document.querySelector('.modal-container');
		modalContainer.classList.add('hidden');
		console.log('exit');
	}
});

document.body.appendChild(appendTaskForm());
