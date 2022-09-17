import appendTaskAddButton from './append-add-task-button';
import { appendTaskForm } from './append-task-form';

export default function renderAllTasks() {
	//Create page Title
	const pageTitle = document.createElement('h1');
	pageTitle.textContent = 'All Tasks';
	pageTitle.classList.add('page-title', 'text-center', 'text-2xl', 'mb-2');

	//Create list to append task items
	const taskList = document.createElement('ul');
	taskList.classList.add('task-list', 'space-y-2');

	//Container query selector where everything will append to
	const taskContainer = document.querySelector('.task-container');

	//query selectors for buttons
	const createTaskLi = document.querySelector('.create-task-li');
	const addTaskButton = document.querySelector('.add-task');

	taskList.appendChild(appendTaskAddButton());

	taskContainer.appendChild(pageTitle);

	taskContainer.appendChild(taskList);

	document.addEventListener('click', function (e) {
		if (e.target.classList.contains('add-task')) {
			// taskList.removeChild(taskList.lastChild);
			taskContainer.appendChild(appendTaskForm());
			document.querySelector('.add-task').remove();
		}
	});

	document.addEventListener('click', function (e) {
		if (e.target.classList.contains('create-task-exit')) {
			document.querySelector('.create-task-li').remove();
			taskList.appendChild(appendTaskAddButton());
			console.log('exit');
		}
	});
}
