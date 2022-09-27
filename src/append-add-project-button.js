export function appendAddProjectButton() {
	const newLink = document.createElement('a');
	const addIcon = document.createElement('img');
	const addProject = document.createElement('span');

	addIcon.src = './images/add-task-icon.svg';

	addProject.textContent = 'Add Project';

	newLink.classList.add(
		'add-project-button',
		'flex',
		'items-center',
		'p-2',
		'text-base',
		'font-raj',
		'font-thin',
		'text-gray-900',
		'rounded-lg',
		'dark:text-white',
		'hover:bg-gray-100',
		'dark:hover:bg-gray-700'
	);

	addProject.classList.add('ml-3', 'add-project-button');
	addIcon.classList.add('add-project-button');

	newLink.appendChild(addIcon);
	newLink.appendChild(addProject);

	return newLink;
}
