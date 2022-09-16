export default function renderPage() {
	const addTaskBtn = document.querySelector('.add-task');
	const taskList = document.querySelector('.task-list');

	// addTaskBtn.removeEventListener('click', appendTaskForm);
	const newLi = document.createElement('li');

	newLi.classList.add(
		'create-task-li',
		'pl-4',
		'border',
		'rounded',
		'border-lightBlue',
		'align-middle',
		'py-2',
		'gap-2',
		'flex',
		'shadow-2xl'
	);

	taskList.appendChild(newLi);
}
