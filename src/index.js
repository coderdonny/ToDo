import './style.css';
import Task from './create-task';

const addTaskBtn = document.querySelector('.add-task');
const taskList = document.querySelector('.task-list');

addTaskBtn.addEventListener('click', appendTaskForm);

function appendTaskForm() {
	addTaskBtn.removeEventListener('click', appendTaskForm);
	const newLi = document.createElement('li');
	const titleLabel = document.createElement('label');
	const titleInput = document.createElement('input');
	const detailsLabel = document.createElement('label');
	const detailsInput = document.createElement('input');
	const row1 = document.createElement('p');
	const row2 = document.createElement('p');

	titleInput.setAttribute('type', 'text');
	titleInput.setAttribute('id', 'title');

	titleLabel.setAttribute('for', 'title');
	titleLabel.textContent = 'Title:';

	detailsInput.setAttribute('type', 'text');
	detailsInput.setAttribute('id', 'details');

	detailsLabel.setAttribute('for', 'details');
	detailsLabel.textContent = 'Details:';

	titleInput.classList.add('bg-transparent', 'ml-5');
	detailsInput.classList.add('bg-transparent', 'ml-5');

	row1.classList.add('flex');
	row2.classList.add('flex');

	newLi.classList.add(
		'pl-4',
		'flex-col',
		'border',
		'rounded',
		'border-lightBlue',
		'align-middle',
		'py-2',
		'gap-2'
	);

	addTaskBtn.classList.add(
		'pl-4',
		'flex-col',
		'border',
		'rounded',
		'border-lightBlue',
		'align-middle',
		'py-2',
		'gap-2'
	);

	row1.appendChild(titleLabel);
	row1.appendChild(titleInput);
	row2.appendChild(detailsLabel);
	row2.appendChild(detailsInput);

	newLi.appendChild(row1);
	newLi.appendChild(row2);

	taskList.appendChild(newLi);
}

// function addTask() {
// 	const newTask = new Task('bye', 'hello', 'hii', 'hello');
// 	console.log(newTask);
// }
