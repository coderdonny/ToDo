import appendTaskAddButton from './append-add-task-button';
import { appendTaskForm } from './append-task-form';
import { allTasks } from '.';

export default function renderPage(tab) {
	//Create page Title
	const pageTitle = document.createElement('h1');
	pageTitle.classList.add('page-title', 'text-center', 'text-2xl', 'mb-2');

	//displays title depending on which tab was clicked
	if (tab === 'all') {
		pageTitle.textContent = 'All Tasks';
	} else if (tab === 'today') {
		pageTitle.textContent = 'Today';
	} else if (tab === 'week') {
		pageTitle.textContent = 'Week';
	} else {
		pageTitle.textContent = tab;
	}

	//Create list to append task items
	const taskList = document.createElement('ul');
	taskList.classList.add('task-list', 'space-y-4');

	//Container query selector where everything will append to
	const taskContainer = document.querySelector('.task-container');

	//query selectors for buttons
	const createTaskLi = document.querySelector('.create-task-li');

	taskContainer.appendChild(pageTitle);

	taskContainer.appendChild(taskList);
}
