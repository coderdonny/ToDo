export default function renderTask(newTask) {
	console.log('hello');

	let title = newTask.title;
	let details = newTask.details;
	let date = newTask.dueDate;

	const taskList = document.querySelector('.task-list');
	const newTaskDOM = document.createElement('li');
	const titleDOM = document.createElement('p');
	const detailsDOM = document.createElement('p');
	const dateDOM = document.createElement('p');

	titleDOM.textContent = title;
	detailsDOM.textContent = details;
	dateDOM.textContent = date;

	newTaskDOM.classList.add(
		'px-2',
		'flex',
		'border',
		'rounded',
		'border-lightBlue',
		'align-middle',
		'py-2',
		'gap-4',
		'transition-all',
		'duration-300',
		'justify-between'
	);
	detailsDOM.classList.add('text-OOFGrey');

	newTaskDOM.appendChild(titleDOM);
	newTaskDOM.appendChild(detailsDOM);
	newTaskDOM.appendChild(dateDOM);

	taskList.appendChild(newTaskDOM);
	// return addTaskButton;
}
