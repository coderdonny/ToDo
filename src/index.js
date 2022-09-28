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
import { appendNewProject } from './append-new-project';
import { appendAddProjectButton } from './append-add-project-button';
import Project from './create-new-project';

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

const projectArray = [];

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
const projectList = document.querySelector('.add-project');

projectList.appendChild(appendAddProjectButton());

//tab listeners
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

//listens for add project button and appends form
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('add-project-button')) {
		// console.log('click project list');
		projectList.append(appendProjectForm());
		document.querySelector('.add-project-button').remove();
	}
});

//cancels new project form
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('new-project-cancel')) {
		// console.log('cancel test');
		document.querySelector('.create-project-li').remove();
		projectList.appendChild(appendAddProjectButton());
	}
});

let projectID = 0;
//confirms new project, creates new li and appends to sidebar
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('new-project-confirm')) {
		// console.log('confirm test');
		const newProjectTitleInput = document.querySelector(
			'.project-title-input'
		).value;
		if (newProjectTitleInput === '') {
			return;
		}
		projectList.appendChild(
			appendNewProject(newProjectTitleInput, projectID)
		);
		projectList.appendChild(appendAddProjectButton());
		document.querySelector('.create-project-li').remove();

		const newProjectArray = [];
		const newProject = new Project(newProjectTitleInput, newProjectArray);
		console.log(newProject);
		console.log(newProject.taskArray);

		projectArray.push(newProject);
		console.log(projectArray);
		projectID++;
	}
});

projectList.addEventListener('click', function (e) {
	for (let i = 0; i < projectArray.length; i++) {
		if (e.target.dataset.project) {
			console.log(e.target.dataset.project);
			console.log(projectArray[e.target.dataset.project].taskArray);
		}
	}
});

//renders all tasks by default
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

//appends hidden task form
document.body.appendChild(appendTaskForm());
