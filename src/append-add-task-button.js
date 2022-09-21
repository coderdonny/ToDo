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
		'bg-opacity-10',
		// 'bg-green-900',
		'align-middle',
		'py-2',
		'gap-2',
		'hover:bg-green-700',
		'hover:bg-opacity-10',
		'hover:border-green-300',
		'cursor-pointer',
		'transition-all',
		'duration-200',
		'opacity-80',
		'hover:opacity-100'
	);

	addTaskButton.appendChild(addIcon);
	addTaskButton.appendChild(addTaskText);

	// taskList.appendChild(addTaskButton);
	return addTaskButton;
}
