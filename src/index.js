import './style.css';
import Task from './create-task';
import { appendTaskForm } from './append-task-form';
import { submitTaskForm } from './submit-task-form';
import { appendProjectForm } from './append-project-form';
import renderPage from './render-page';
import removeAllChildren from './remove-page';
import renderTasks from './render-tasks';
import renderWeek from './render-week';
import renderToday from './render-today';
import appendTaskAddButton from './append-add-task-button';

export const allTasks = [
	{
		title: 'Clean the Dishes',
		details: 'must be done by 5pm',
		dueDate: '2022-09-29',
	},
	{
		title: 'Clean the yard',
		details: 'before bag pickup',
		dueDate: '2022-09-30',
	},
	{
		title: 'Go shopping',
		details: 'buy shirts',
		dueDate: '2022-09-27',
	},
	{
		title: 'Walk the dog',
		details: 'give him a bath after',
		dueDate: '2022-09-29',
	},
	{
		title: 'Finish work assignment',
		details: 'hand it in before 8pm',
		dueDate: '2021-12-11',
	},
	{
		title: 'Go grocery shopping',
		details: 'eggs, bacon, bread, blueberries',
		dueDate: '2023-01-11',
	},
	{
		title: 'Practice the guitar',
		details: 'work on the blues riff',
		dueDate: '2022-09-11',
	},
	{
		title: 'Clean the car',
		details: 'N/A',
		dueDate: '2022-12-11',
	},
	{
		title: 'Get a haircut',
		details: 'N/A',
		dueDate: '2022-12-11',
	},
];

let currentTab = 'all';

function taskRenderer(tab) {
	if (tab === 'all') {
		return renderTasks();
	} else if (tab === 'today') {
		return renderToday;
	} else if (tab === 'week') {
		return renderWeek();
	}
}

//submits form, adds task to array and sends values to Task class
document.addEventListener('submit', function (e) {
	e.preventDefault();
	const taskForm = e.target;
	let formValues = submitTaskForm();
	let title = formValues.title;
	let details = formValues.details;
	let date = formValues.date;

	if (formValues.details === '') {
		details = 'N/A';
	} else {
		details = formValues.details;
	}

	const newTask = new Task(title, details, date);
	allTasks.push(newTask);

	console.log(newTask);

	console.log('submit form test');
	console.log(allTasks);

	const modalContainer = document.querySelector('.modal-container');
	modalContainer.classList.add('hidden');

	removeAllChildren();
	renderPage(currentTab);
	taskRenderer(currentTab);

	const taskFormDOM = document.querySelector('.task-form');
	taskFormDOM.reset();
});

const allTasksTab = document.querySelector('.all-tasks-tab');
const todayTab = document.querySelector('.today-tab');
const weekTab = document.querySelector('.week-tab');
const addProject = document.querySelector('.add-project');
const projectList = document.querySelector('.task-sidebar');

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
	renderToday();
});
weekTab.addEventListener('click', function () {
	if (currentTab === 'week') {
		return;
	}
	removeAllChildren();
	currentTab = 'week';
	renderPage(currentTab);
	renderWeek();
});

addProject.addEventListener('click', function () {
	console.log('click project list');
	projectList.append(appendProjectForm());
	projectList.querySelector('.add-project').classList.add('hidden');
});

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('new-project-cancel')) {
		console.log('cancel test');
		document.querySelector('.create-project-li').remove();
		document.querySelector('.add-project').classList.remove('hidden');
	}
});

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('new-project-confirm')) {
		console.log('confirm test');
		const newProjectTitleInput = document.querySelector(
			'.project-title-input'
		).value;
		console.log(newProjectTitleInput);
	}
});

renderPage(currentTab);
renderTasks(currentTab);

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
