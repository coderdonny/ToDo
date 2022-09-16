import appendTaskAddButton from './append-add-task-button';

export default function renderAllTasks() {
	const pageTitle = document.createElement('h1');
	pageTitle.textContent = 'All Tasks';

	pageTitle.classList.add('page-title', 'text-center', 'text-2xl', 'mb-2');

	const taskContainer = document.querySelector('.task-list');
	taskContainer.appendChild(pageTitle);
	appendTaskAddButton();
}
