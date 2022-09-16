export default function appendTaskAddButton() {
	const taskList = document.querySelector('.task-list');
	const addTaskButton = document.createElement('li');
	const addTaskText = document.createElement('p');
	const pageTitle = document.querySelector('.page-title');

	addTaskText.textContent = 'Add Task';

	const addIcon = document.createElement('img');

	addIcon.src = './images/add-task-icon.svg';

	addIcon.classList.add('add-task');
	addTaskText.classList.add('add-task');

	addTaskButton.classList.add(
		'add-task',
		'pl-4',
		'flex',
		'border',
		'rounded',
		'border-lightBlue',
		'align-middle',
		'py-2',
		'gap-2',
		'hover:bg-gray-400',
		'hover:bg-opacity-10',
		'cursor-pointer',
		'transition-all',
		'duration-300'
	);

	addTaskButton.appendChild(addIcon);
	addTaskButton.appendChild(addTaskText);

	taskList.appendChild(addTaskButton);
}
